export const TASK_STORAGE_KEY = "tasks";

export enum TaskState {
  CREATING = "creating",
  EDITING = "editing",
}


export interface Task {
  id: string;
  title: string;
  isCompleted?: boolean;
  state?: TaskState;
}