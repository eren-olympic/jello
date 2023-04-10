// TaskItem.tsx

import React from 'react';

export interface Task {
  id: number;
  title: string;
  category: string;
  description: string | null;
  xp: number;
  isCompleted: boolean;
  finishedDate?: Date | null;
}

interface TaskItemProps {
  task: Task;
  onToggleComplete: (taskId: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggleComplete }) => {
  const handleToggleComplete = () => {
    onToggleComplete(task.id);
  };

  return (
    <div className="flex items-center mb-2">
      <input
        type="checkbox"
        className="mr-2"
        checked={task.isCompleted}
        onChange={handleToggleComplete}
      />
      <div className="flex-grow">
        <h3 className="font-semibold">{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <span className="text-gray-500">{task.xp} XP</span>
    </div>
  );
};

export default TaskItem;
