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

    function updateTask(id: string, payload: {title: Task["title"]}) {
        setTasks(
            tasks.map((task) => task.id === id ? {...task, state: TaskState.CREATING ,...payload
                
            } : task)
        );
    }

    function updateTaskState (id: string, concluded: boolean) {
        setTasks(
            tasks.map((task) => task.id === id ? {...task, isCompleted: concluded} : task)
        );
    }

    function deleteTask (id: string) {
        setTasks(
            tasks.filter((task) => task.id !== id)
        );
    }

    return {
        prepareTask,
        updateTask,
        updateTaskState,
        deleteTask
    };
}

