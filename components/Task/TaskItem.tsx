import React from 'react';

interface Task {
  id: number;
  title: string;
  xp: number;
}

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md mb-4">
      <h3 className="text-lg font-medium mb-2">{task.title}</h3>
      <p className="text-sm">XP: {task.xp}</p>
    </div>
  );
};

export default TaskItem;
