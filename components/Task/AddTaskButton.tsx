// components/AddTaskButton.tsx

import React, { useState } from 'react';
import { Task } from './TaskItem';

interface AddTaskButtonProps {
  newTask: Task;
  setNewTask: React.Dispatch<React.SetStateAction<Task>>;
  onAddTask: () => void;
}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ newTask, setNewTask, onAddTask }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        Add Task
      </button>
      {isFormVisible && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onAddTask();
            setIsFormVisible(false);
          }}
        >
          <input
            name="title"
            placeholder="Title"
            value={newTask.title}
            onChange={handleInputChange}
            required
          />
          <input
            name="category"
            placeholder="Category"
            value={newTask.category}
            onChange={handleInputChange}
            required
          />
          <input
            name="xp"
            type="number"
            placeholder="XP"
            value={newTask.xp}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Add Task</button>
        </form>
      )}
    </div>
  );
};

export default AddTaskButton;
