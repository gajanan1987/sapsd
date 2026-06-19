import supabase from "./supabase";

export async function getUser() {
  const { data } = await supabase.auth.getSession();
  return data;
}
