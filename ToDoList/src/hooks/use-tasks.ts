import useLocalStorage from "use-local-storage";
import { TASAK_STORAGE_KEY } from "../models/task";

export default function useTasks() {
    const [tasks] = useLocalStorage(TASAK_STORAGE_KEY, []);

    return{
        tasks,
        tasksCount: tasks.length,
        concludedTasksCount: tasks.filter((task) => task.isConcluded).length,
    }
}