import type { IssueType } from "../types";

const initialState: IssueType[] = [
  {
    id: "1",
    title: "title 1",
    description: "description",
    status: "pending",
    removingStatus: "idle",
  },
  {
    id: "2",
    title: "title 2",
    description: "description2",
    status: "open",
    removingStatus: "idle",
  },
  {
    id: "3",
    title: "title 3",
    description: "description3",
    status: "closed",
    removingStatus: "idle",
  },
];

export const fetchInitialIssues = () =>
  new Promise<IssueType[]>((resolve) => {
    setTimeout(() => {
      resolve(initialState);
    }, 3000);
  });

export const removeIssue = (id: string) =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve(id), 2000);
  });
