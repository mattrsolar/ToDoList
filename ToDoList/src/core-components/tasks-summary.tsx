import Badge from "../components/badge";
import Text from "../components/text";
import useTasks from "../hooks/use-tasks";

export default function TasksSummary() {
  const { tasksCount, concludedTasksCount, isLoadingTasks } = useTasks();

  return (
    <>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Created tasks
        </Text>
        <Badge variant="secondary" size="sm" loading={isLoadingTasks}>
          {tasksCount}
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <Text variant="body-sm-bold" className="!text-gray-300">
          Done
        </Text>
        <Badge variant="primary" size="sm" loading={isLoadingTasks}>
          {concludedTasksCount} of {tasksCount}
        </Badge>
      </div>
    </>
  );
}
