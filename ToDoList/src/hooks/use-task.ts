import { useState } from "react";
import { delay } from "../helpers/utils";
import { TASK_STORAGE_KEY, TaskState, type Task } from "../models/task";
import useLocalStorageState from "use-local-storage-state";

export default function useTask() {
    const [tasks, setTasks] = useLocalStorageState<Task[]>(TASK_STORAGE_KEY, {
        defaultValue: []
    });

    const [isUpdatingTask, setIsUpdatingTask] = useState(false);
    const [isDeletingTask, setIsDeletingTask] = useState(false);

    function prepareTask() {
        setTasks([...tasks, {
            id: crypto.randomUUID(),
            title: "",
            state: TaskState.CREATING,
        }])
    }

    async function updateTask(id: string, payload: {title: Task["title"]}) {
        setIsUpdatingTask(true);
        await delay(1000);
        
        setTasks(
            tasks.map((task) => task.id === id ? {...task, state: TaskState.CREATING ,...payload
                
            } : task)
        );
        setIsUpdatingTask(false);
    }

    function updateTaskState (id: string, concluded: boolean) {
        setTasks(
            tasks.map((task) => task.id === id ? {...task, isCompleted: concluded} : task)
        );
    }

    async function deleteTask (id: string) {
        setIsDeletingTask(true);
        await delay(1000);
        setTasks(
            tasks.filter((task) => task.id !== id)
        );
        setIsDeletingTask(false);
    }

    return {
        prepareTask,
        updateTask,
        updateTaskState,
        deleteTask,
        isUpdatingTask,
        isDeletingTask
    };
}

