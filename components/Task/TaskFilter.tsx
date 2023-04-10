import React from 'react';

interface TaskFilterProps {
  onFilterChange: (filterValue: string) => void;
}

const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(e.target.value);
  };

  return (
    <select
      onChange={handleFilterChange}
      className="border-2 border-gray-300 px-2 py-1 rounded"
    >
      <option value="">All</option>
      <option value="general">General</option>
      <option value="tools">Tools</option>
      <option value="pm">PM</option>
      <option value="designer">Designer</option>
      <option value="stock_market_analysis">Stock Market Analysis</option>
    </select>
  );
};

export default TaskFilter;
