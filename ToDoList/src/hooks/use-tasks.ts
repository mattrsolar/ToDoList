import useLocalStorageState from "use-local-storage-state";
import { TASK_STORAGE_KEY, TaskState, type Task } from "../models/task";

export default function useTasks() {
    const [tasks] = useLocalStorageState<Task[]>(TASK_STORAGE_KEY, {
        defaultValue: []
    });

    return{
        tasks,
        tasksCount: tasks.filter((task) => task.state === TaskState.CREATING).length,
        concludedTasksCount: tasks.filter((task) => task.isCompleted).length,
    }
}