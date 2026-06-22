import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import supabase from "../services/supabase";
import { signOut } from "./authSlice";

// ✅ Create Defination
// export const createDefination = createAsyncThunk(
//   "definition/createDefination",
//   async ({ definition }, { rejectWithValue }) => {
//     const { error, data } = await supabase
//       .from("definition")
//       .insert([definition])
//       .select()
//       .single();
//     if (error) return rejectWithValue(error.message);
//     return { ...data };
//   },
// );

// ✅ Fetch Loans
export const fetchDefinition = createAsyncThunk(
  "loans/fetchDefinition",
  async (_, { rejectWithValue, getState }) => {
    const {
      auth: { user },
    } = getState();
    if (!user) return [];
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
  "loans/deleteComp",
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
  "loans/compDetails",
  async (Id, { rejectWithValue }) => {
    const { error, data } = await supabase
      .from("enterprisestructure")
      .select("*")
      .eq("id", Id)
      .single();
    if (error) return rejectWithValue(error.message);
    return data;
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

const initialState = {
  items: [],
  compDetails: null,
  status: "idle",
  loadComp: "idle",
  fetchStatus: "idle",
  error: null,
  currentSchedule: null,
  emiSummary: null,
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
        s.items.unshift(a.payload);
      })
      .addCase(createDefinations.rejected, (s, a) => {
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
      // Delete
      .addCase(compDetails.pending, (s) => {
        s.compDetails = [];
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
const selectLoansState = (state) => state.loans;

export const selectScheduleState = createSelector(
  [selectLoansState],
  (state) => state.currentSchedule,
);

export const { computeScheduleFor, removeSummery, restStatus } =
  defineSlice.actions;
export default defineSlice.reducer;
