// components/TaskList.tsx

import React from 'react';
import TaskItem, { Task } from './TaskItem';

interface TaskListProps {
  title: string;
  tasks: Task[];
  onToggleComplete: (taskId: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ title, tasks, onToggleComplete }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} />
      ))}
    </div>
  );
};

export default TaskList;
