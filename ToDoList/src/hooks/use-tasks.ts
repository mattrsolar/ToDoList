import useLocalStorageState from "use-local-storage-state";
import { TASK_STORAGE_KEY, TaskState, type Task } from "../models/task";
import { useEffect, useState } from "react";
import { delay } from "../helpers/utils";

export default function useTasks() {
    const [tasksData] = useLocalStorageState<Task[]>(TASK_STORAGE_KEY, {
        defaultValue: []
    });
    const [tasks, setTasks] = useState<Task[]>(tasksData);
    const [isLoadingTasks, setIsLoadingTasks] = useState(true);
    
    async function fetchTasks(){
        if(isLoadingTasks){
            await delay(2000);
            setIsLoadingTasks(false);
        }

        setTasks(tasksData);
    }

    useEffect(() => {
        fetchTasks();
    }, [tasksData]);

    return{
        tasks,
        tasksCount: tasks.filter((task) => task.state === TaskState.CREATING).length,
        concludedTasksCount: tasks.filter((task) => task.isCompleted).length,
        isLoadingTasks
    }
}