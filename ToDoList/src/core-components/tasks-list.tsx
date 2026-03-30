import TaskItem from "./task-item";
import PlusIcon from "../assets/icons/plus.svg?react";
import Button from "../components/button";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";
import { TaskState } from "../models/task";

export default function TasksList() {
  const { tasks } = useTasks();
  const { prepareTask } = useTask();

  console.log(tasks);

  function handleNewTask() {
    prepareTask();
  }

  return (
    <>
      <section>
        <Button
          icon={PlusIcon}
          className="w-full"
          onClick={handleNewTask}
          disabled={tasks.some((task) => task.state === TaskState.CREATING)}
        >
          New Task
        </Button>
      </section>
      <section className="space-y-2">
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </section>
    </>
  );
}
