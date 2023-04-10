import React from 'react';
import TaskItem, { Task } from './TaskItem';

interface DailyTaskProps {
  tasks: Task[];
  onToggleComplete: (taskId: number) => void;
}

const DailyTask: React.FC<DailyTaskProps> = ({ tasks, onToggleComplete }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Daily Tasks</h2>
      {tasks
        .map((task) => (
          <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} />
        ))}
    </div>
  );
};

export default DailyTask;
