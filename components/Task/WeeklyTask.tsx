import React from 'react';
import TaskItem, { Task } from './TaskItem';

interface WeeklyTaskProps {
  tasks: Task[];
  onToggleComplete: (taskId: number) => void;
}

const WeeklyTask: React.FC<WeeklyTaskProps> = ({ tasks, onToggleComplete }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Weekly Tasks</h2>
      {tasks
        .map((task) => (
          <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} />
        ))}
    </div>
  );
};

export default WeeklyTask;
