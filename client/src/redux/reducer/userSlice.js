import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialValues = {
  users: [],
  loading: true,
};

// Define the asynchronous thunk action
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await axios.get("http://localhost:8000/api/v1/users");
  return response.data;
});

// Create the user slice
const userSlice = createSlice({
  name: "userslice",
  initialState: initialValues,
  reducers: {},
  extraReducers: (builder) => {
    // Use the builder to handle different states
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true; // Set loading to true when the request is pending
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload; // Update users with the fetched data
        state.loading = false; // Set loading to false when the request is fulfilled
      })
      .addCase(getUsers.rejected, (state) => {
        state.loading = false; // Set loading to false if the request fails
      });
  },
});

// Export the reducer
export default userSlice.reducer;
