import ButtonIcon from "../components/button-icon";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import XIcon from "../assets/icons/X.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";

import Card from "../components/card";
import InputCheckbox from "../components/input-checkbox";
import Text from "../components/text";
import { useState } from "react";
import InputText from "../components/input-text";
import { TaskState, type Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(
    task?.state === TaskState.CREATING,
  );

  const [taskTitle, setTaskTitle] = useState(task?.title || "");
  const { updateTask, updateTaskState, deleteTask } = useTask();

  function handleEditTask() {
    setIsEditing((prev) => !prev);
  }

  function handleExitEditTask() {
    if (task?.state === TaskState.CREATING) {
      deleteTask(task.id);
    }
    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(task.id, taskTitle);
    updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  }

  function handleUpdateTaskState(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    updateTaskState(task.id, checked);
  }

  function handleDeleteTask() {
    deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.isCompleted}
            onChange={handleUpdateTaskState}
          />
          <Text
            className={cx("flex-1", {
              "line-through": task?.isCompleted,
            })}
          >
            {task?.title}
          </Text>
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={TrashIcon}
              variant="teriary"
              onClick={handleDeleteTask}
            />
            <ButtonIcon
              type="button"
              icon={PencilIcon}
              variant="teriary"
              onClick={handleEditTask}
            />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText
            className="flex-1"
            onChange={handleChangeTaskTitle}
            value={taskTitle}
            required
            autoFocus
          />
          <div className="flex gap-1">
            <ButtonIcon
              type="button"
              icon={XIcon}
              variant="secondary"
              onClick={handleExitEditTask}
            />
            <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
          </div>
        </form>
      )}
    </Card>
  );
}
