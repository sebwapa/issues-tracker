export type IssueStatus = "open" | "pending" | "closed";
export type RemovingStatus = "idle" | "inProgress" | "done";
export interface IssueType {
  id: string;
  title: string;
  description: string;
  status: IssueStatus;
  removingStatus: RemovingStatus;
}
