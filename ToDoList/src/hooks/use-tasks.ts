import useLocalStorageState from "use-local-storage-state";
import { TASK_STORAGE_KEY, type Task } from "../models/task";

export default function useTasks() {
    const [tasks] = useLocalStorageState<Task[]>(TASK_STORAGE_KEY, {
        defaultValue: []
    });

    return{
        tasks,
        tasksCount: tasks.length,
        concludedTasksCount: tasks.filter((task) => task.isCompleted).length,
    }
}