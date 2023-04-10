import React from 'react';
import TaskItem from './TaskItem';

const WeeklyTask = () => {
  // Dummy data for now, you can replace this with real data later
  const tasks = [
    { id: 1, title: 'Task 1', xp: 50 },
    { id: 2, title: 'Task 2', xp: 60 },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Weekly Tasks</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default WeeklyTask;
