import React from 'react';

interface TaskSortProps {
  onSortChange: (sortValue: string) => void;
}

const TaskSort: React.FC<TaskSortProps> = ({ onSortChange }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSortChange(e.target.value);
  };

  return (
    <select
      onChange={handleSortChange}
      className="border-2 border-gray-300 px-2 py-1 rounded"
    >
      <option value="title">Title</option>
      <option value="category">Category</option>
      <option value="xp">XP</option>
      <option value="finished_date">Finished Date</option>
    </select>
  );
};

export default TaskSort;
