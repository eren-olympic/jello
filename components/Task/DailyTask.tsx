import React from 'react';
import TaskItem from './TaskItem';

const DailyTask = () => {
  // Dummy data for now, you can replace this with real data later
  const tasks = [
    { id: 1, title: 'Task 1', xp: 10 },
    { id: 2, title: 'Task 2', xp: 15 },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Daily Tasks</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default DailyTask;
