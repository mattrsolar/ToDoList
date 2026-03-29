import TaskItem from "./task-item";
import PlusIcon from "../assets/icons/plus.svg?react";
import Button from "../components/button";
import useTasks from "../hooks/use-tasks";
import useTask from "../hooks/use-task";

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
        <Button icon={PlusIcon} className="w-full" onClick={handleNewTask}>
          New Task
        </Button>
      </section>
      <section className="space-y-2">
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </section>
    </>
  );
}
