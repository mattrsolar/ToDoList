import { TASK_STORAGE_KEY, TaskState, type Task } from "../models/task";
import useLocalStorageState from "use-local-storage-state";

export default function useTask() {
    const [tasks, setTasks] = useLocalStorageState<Task[]>(TASK_STORAGE_KEY, {
        defaultValue: []
    });

    function prepareTask() {
        setTasks([...tasks, {
            id: crypto.randomUUID(),
            title: "",
            state: TaskState.CREATING,
        }])
    }

    return {
        prepareTask
    };
}

