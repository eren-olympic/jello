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
      <h3 className="text-xl font-semibold mb-2">General Tasks</h3>
      {tasks
        .filter((task) => task.category === 'General')
        .map((task) => (
          <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} />
        ))}
      <h3 className="text-xl font-semibold mb-2">Tools</h3>
      {tasks
        .filter((task) => task.category === 'Tools')
        .map((task) => (
          <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} />
        ))}
      <h3 className="text-xl font-semibold mb-2">PM</h3>
      {tasks
        .filter((task) => task.category === 'PM')
        .map((task) => (
          <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} />
        ))}
      <h3 className="text-xl font-semibold mb-2">Designer</h3>
      {tasks
        .filter((task) => task.category === 'Designer')
        .map((task) => (
          <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} />
        ))}
      <h3 className="text-xl font-semibold mb-2">Stock Market Analysis</h3>
      {tasks
        .filter((task) => task.category === 'Stock Market Analysis')
        .map((task) => (
          <TaskItem key={task.id} task={task} onToggleComplete={onToggleComplete} />
        ))}
    </div>
  );
};

export default DailyTask;
