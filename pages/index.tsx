import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout';
import TaskList from '../components/Task/TaskList';
import { Task } from '../components/Task/TaskItem';
import AddTaskButton from '../components/Task/AddTaskButton';
import TaskFilter from '../components/Task/TaskFilter';
import TaskSort from '../components/Task/TaskSort';
import { motion } from 'framer-motion';
import ChatBot from '../components/ChatBot';

const initialTasks: Task[] = [
  { id: 1, title: 'Reading Twitter feeds and writing 10 small notes', type: 'daily', category: 'General', description: null , xp: 10, isCompleted: false, finishedDate: null },
  { id: 2, title: 'Write the Taost Phase II RPD', type: 'one-time', category: 'General', description: null , xp: 10, isCompleted: false, finishedDate: null },
  { id: 10, title: 'Ensure all project documentation is up-to-date', type: 'weekly', category: 'PM', description: null , xp: 20, isCompleted: false, finishedDate: null }
];

const useFilteredAndSortedTasks = (tasks: Task[], filter: string, sort: string, typeFilter: string) => {
  const [filteredAndSortedTasks, setFilteredAndSortedTasks] = useState(tasks);

  useEffect(() => {
    let filteredTasks = tasks.filter((task) =>
      filter ? task.category.toLowerCase() === filter : true
    );

    filteredTasks = filteredTasks.filter((task) =>
      typeFilter === 'all' ? true : task.type === typeFilter
    );

    filteredTasks.sort((a: Task, b: Task) => {
      switch (sort) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'xp':
          return a.xp - b.xp;
        case 'finished_date':
          return (a.finishedDate?.getTime() ?? 0) - (b.finishedDate?.getTime() ?? 0);
        default:
          return 0;
      }
    });

    setFilteredAndSortedTasks(filteredTasks);
  }, [tasks, filter, sort, typeFilter]);

  return filteredAndSortedTasks;
};

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState<Task>({
    id: tasks.length + 1,
    title: '',
    type: 'one-time',
    category: '',
    description: '',
    xp: 0,
    isCompleted: false,
    finishedDate: null,
  });

  const handleAddTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask({
      ...newTask,
      id: newTask.id + 1,
      title: '',
      category: '',
      xp: 0,
      isCompleted: false,
      finishedDate: null,
    });
  };

  const handleToggleComplete = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');

  const [activeTypeFilter, setActiveTypeFilter] = useState('all');
  const tasksFilteredAndSorted = useFilteredAndSortedTasks(tasks, filter, sort, activeTypeFilter);

  const handleFilterChange = (filter: string) => {
    if (filter === 'all') {
      setFilter('');
    } else {
      setFilter(filter);
    }
  };

  const handleSortChange = (sortValue: string) => {
    setSort(sortValue);
  };

  const [activeTab, setActiveTab] = useState('all');

  const handleTypeFilterClick = (typeFilter: string) => {
    setActiveTypeFilter(typeFilter);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Layout>
          <h1 className="text-2xl font-semibold mb-6">Task Management</h1>
          <div className="bg-white p-6 rounded shadow-md">
            <div className="flex justify-between mb-4">
              <AddTaskButton newTask={newTask} setNewTask={setNewTask} onAddTask={handleAddTask} />
              <div className="flex">
                <TaskFilter onFilterChange={handleFilterChange} />
                <TaskSort onSortChange={handleSortChange} />
              </div>
            </div>
            <div className="mb-4">
              {['all', 'daily', 'weekly', 'one-time', 'urgent'].map((tab) => (
                <button
                  key={tab}
                  className={`mr-4 py-2 px-4 rounded ${activeTab === tab ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                  onClick={() => {
                    setActiveTab(tab);
                    handleTypeFilterClick(tab);
                  }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)} Tasks
                </button>
              ))}
            </div>
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <TaskList title={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Tasks`} tasks={tasksFilteredAndSorted} onToggleComplete={handleToggleComplete} />
            </motion.div>
            <ChatBot />
          </div>
      </Layout>
    </div>
  );
}

