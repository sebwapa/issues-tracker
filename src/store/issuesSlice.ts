import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchInitialIssues, removeIssue } from "./mockedApi";

import type { RootState } from "./store";
import type { IssueType } from "../types";

export type IssuesStateStatus =
  | "notInitialized"
  | "loading"
  | "loaded"
  | "failed";

// Define a type for the slice state
interface IssuesState {
  status: IssuesStateStatus;
  issues: IssueType[];
}

// Define the initial state using that type
const initialState: IssuesState = {
  status: "notInitialized",
  issues: [],
};

export const fetchInitialIssuesAction = createAsyncThunk(
  "issues/fetchInitialIssues",
  async () => fetchInitialIssues()
);

export const removeIssueAction = createAsyncThunk(
  "issues/removeIssue",
  async (id: string) => removeIssue(id)
);

export const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {
    addIssue(state, action: PayloadAction<IssueType>) {
      state.issues.push(action.payload);
    },
    changeIssueStatus(state, action: PayloadAction<string>) {
      const issueToUpdate = state.issues.find((x) => x.id === action.payload);
      if (issueToUpdate) {
        const currStatus = issueToUpdate.status;
        if (currStatus === "open") {
          issueToUpdate.status = "pending";
        } else if (currStatus === "pending") {
          issueToUpdate.status = "closed";
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialIssuesAction.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchInitialIssuesAction.fulfilled, (state, action) => {
        state.issues = action.payload;
        state.status = "loaded";
      })
      .addCase(fetchInitialIssuesAction.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(removeIssueAction.pending, (state, action) => {
        const toRemove = state.issues.find((x) => x.id === action.meta.arg);
        if (toRemove) {
          toRemove.removingStatus = "inProgress";
        }
      })
      .addCase(removeIssueAction.fulfilled, (state, action) => {
        console.log("fulfilled", action);
        state.issues = state.issues.filter((x) => x.id !== action.payload);
      });
    // TODO: handle removeIssueAction.rejected case
  },
});

export const { addIssue, changeIssueStatus } = issuesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.issues.issues;

export default issuesSlice.reducer;
