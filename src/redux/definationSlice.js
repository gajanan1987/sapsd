import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import supabase from "../services/supabase";
import { signOut } from "./authSlice";

// ✅ Fetch Loans
export const fetchDefinition = createAsyncThunk(
  "definition/fetchDefinition",
  async (_, { rejectWithValue, getState }) => {
    const {
      auth: { user },
    } = getState();
    // if (!user) return [];
    if (!user) {
      return rejectWithValue("User not logged in");
    }
    const { data, error } = await supabase
      .from("enterprisestructure")
      .select("*")
      .eq("user_id", user.id);
    if (error) return rejectWithValue(error.message);
    return data;
  },
);

// ✅ Delete Loan
export const deleteComp = createAsyncThunk(
  "definition/deleteComp",
  async (compId, { rejectWithValue }) => {
    const { error } = await supabase
      .from("enterprisestructure")
      .delete()
      .eq("id", compId);
    if (error) return rejectWithValue(error.message);
    return { id: compId };
  },
);

export const compDetails = createAsyncThunk(
  "definition/compDetails",
  async ({ Id, type }, { rejectWithValue }) => {
    const { error, data } = await supabase
      .from("enterprisestructure")
      .select("*")
      .eq("id", Id)
      .single();
    if (error) return rejectWithValue(error.message);
    return { ...data, typemode: type };
  },
);

export const createDefinations = createAsyncThunk(
  "definition/createDefinations",

  async ({ definition }, { rejectWithValue }) => {
    const { data, error } = await supabase
      .from("enterprisestructure")
      .insert([definition])
      .select()
      .single();

    if (error) return rejectWithValue(error.message);

    return { ...data };
  },
);

export const updateDefinition = createAsyncThunk(
  "definition/updateDefinition",
  async ({ Id, definition }, { rejectWithValue }) => {
    const { data, error } = await supabase
      .from("enterprisestructure")
      .update(definition)
      .eq("id", Id)
      .select()
      .single();

    if (error) return rejectWithValue(error.message);

    return data;
  },
);

const initialState = {
  items: [],
  compDetails: null,
  status: "idle",
  loadComp: "idle",
  fetchStatus: "idle",
  error: null,
};

const defineSlice = createSlice({
  name: "definition",
  initialState,
  reducers: {
    restStatus: (state, action) => {
      state.status = "idle";
      state.fetchStatus = "idle";
    },
    clearCompDetails: (state) => {
      state.compDetails = null;
      state.loadComp = "idle";
    },
  },
  extraReducers: (builder) => {
    builder

      // Create
      .addCase(createDefinations.pending, (s) => {
        s.status = "loading";
        s.error = null;
      })
      .addCase(createDefinations.fulfilled, (s, a) => {
        s.status = "succeeded";

        if (!Array.isArray(s.items)) {
          s.items = [];
        }

        s.items.unshift(a.payload);
      })
      .addCase(createDefinations.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.payload;
      })

      .addCase(updateDefinition.pending, (s) => {
        s.status = "loading";
      })
      .addCase(updateDefinition.fulfilled, (s, a) => {
        s.status = "succeeded";

        const index = s.items.findIndex((item) => item.id === a.payload.id);

        if (index !== -1) {
          s.items[index] = a.payload;
        }

        if (s.compDetails?.id === a.payload.id) {
          s.compDetails = a.payload;
        }
      })
      .addCase(updateDefinition.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.payload;
      })

      // Fetch
      .addCase(fetchDefinition.pending, (s) => {
        s.fetchStatus = "loading";
        s.error = null;
      })
      .addCase(fetchDefinition.fulfilled, (s, a) => {
        s.fetchStatus = "succeeded";
        s.items = a.payload;
      })
      .addCase(fetchDefinition.rejected, (s, a) => {
        s.fetchStatus = "failed";
        s.error = a.payload;
      })

      // Delete
      .addCase(deleteComp.pending, (s) => {
        s.status = "loading";
      })
      .addCase(deleteComp.fulfilled, (s, a) => {
        s.items = s.items.filter((item) => item.id !== a.payload.id);
        s.status = "idle";
      })
      .addCase(deleteComp.rejected, (s, a) => {
        s.status = "failed";
        s.error = a.payload;
      })

      // Loan Details
      .addCase(compDetails.pending, (s) => {
        s.compDetails = null;
        s.loadComp = "loading";
      })
      .addCase(compDetails.fulfilled, (s, a) => {
        s.compDetails = a.payload;
        s.loadComp = "succeeded";
      })
      .addCase(compDetails.rejected, (s, a) => {
        s.loadComp = "failed";
        s.error = a.payload;
      })

      // Sign out
      .addCase(signOut.fulfilled, () => initialState);
  },
});

//// ✅ Selectors
const selectDefinitionState = (state) => state.definition;

export const selectCompDetails = createSelector(
  [selectDefinitionState],
  (state) => state.compDetails,
);

export const {
  computeScheduleFor,
  removeSummery,
  restStatus,
  clearCompDetails,
} = defineSlice.actions;
export default defineSlice.reducer;
