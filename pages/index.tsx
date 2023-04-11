import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout';
import DailyTask from '../components/Task/DailyTask';
import WeeklyTask from '../components/Task/WeeklyTask';
import { Task } from '../components/Task/TaskItem';
import AddTaskButton from '../components/Task/AddTaskButton';
import TaskFilter from '../components/Task/TaskFilter';
import TaskSort from '../components/Task/TaskSort';
import { motion } from 'framer-motion';
import ChatBot from '../components/ChatBot';

const dailyTasks: Task[] = [
  { id: 1, title: 'Reading Twitter feeds and writing 10 small notes', category: 'General', description: null , xp: 10, isCompleted: false, finishedDate: null },
  { id: 2, title: 'Reading news and writing 3 medium notes', category: 'General', description: null , xp: 10, isCompleted: false, finishedDate: null },
  { id: 3, title: 'Set and review daily priorities', category: 'General', description: null , xp: 10, isCompleted: false, finishedDate: null },
  { id: 4, title: 'Network with one industry professional', category: 'General', description: null , xp: 15, isCompleted: false, finishedDate: null },
  { id: 5, title: 'Listen to a relevant podcast episode and take notes', category: 'General', description: null , xp: 10, isCompleted: false, finishedDate: null },
  { id: 6, title: 'Share an interesting industry-related article with your team', category: 'General', description: null , xp: 15, isCompleted: false, finishedDate: null },
  { id: 7, title: 'Learn and implement a new keyboard shortcut or productivity hack', category: 'Tools', description: null , xp: 10, isCompleted: false, finishedDate: null },
  { id: 8, title: 'Share a useful resource or tool with team members', category: 'Tools', description: null , xp: 10, isCompleted: false, finishedDate: null },
  { id: 9, title: 'Define new feature requirements', category: 'PM', description: null , xp: 20, isCompleted: false, finishedDate: null }
];

const weeklyTasks: Task[] = [
  { id: 10, title: 'Ensure all project documentation is up-to-date', category: 'PM', description: null , xp: 20, isCompleted: false, finishedDate: null },
  { id: 11, title: 'Design a page/component using Figma, referencing inspiration from Dribbble', category: 'Designer', description: null , xp: 30, isCompleted: false, finishedDate: null },
  { id: 12, title: 'Brainstorm new design ideas or concepts', category: 'Designer', description: null , xp: 20, isCompleted: false, finishedDate: null },
  { id: 13, title: 'Evaluate and improve the accessibility of a design', category: 'Designer', description: null , xp: 20, isCompleted: false, finishedDate: null },
  { id: 14, title: 'Monitor stock market news and trends', category: 'Stock Market Analysis', description: null , xp: 15, isCompleted: false, finishedDate: null },
  { id: 15, title: 'Review performance of your investment portfolio', category: 'Stock Market Analysis', description: null , xp: 10, isCompleted: false, finishedDate: null },
  { id: 16, title: 'Analyze a specific stock or sector', category: 'Stock Market Analysis', description: null , xp: 20, isCompleted: false, finishedDate: null },
  { id: 17, title: 'Conduct basic technical analysis on a stock chart', category: 'Stock Market Analysis', description: null , xp: 15, isCompleted: false, finishedDate: null }
];

const useFilteredAndSortedTasks = (tasks: Task[], filter: string, sort: string) => {
  const [filteredAndSortedTasks, setFilteredAndSortedTasks] = useState(tasks);

  useEffect(() => {
    let filteredTasks = tasks.filter((task) =>
      filter ? task.category.toLowerCase() === filter : true
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
  }, [tasks, filter, sort]);

  return filteredAndSortedTasks;
};

export default function Home() {
  const [tasks, setTasks] = useState([...dailyTasks, ...weeklyTasks]);
  const [newTask, setNewTask] = useState<Task>({
    id: tasks.length + 1,
    title: '',
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

  const dailyTasksFilteredAndSorted = useFilteredAndSortedTasks(dailyTasks, filter, sort);
  const weeklyTasksFilteredAndSorted = useFilteredAndSortedTasks(weeklyTasks, filter, sort);

  const handleFilterChange = (filter: string) => {
    setFilter(filter);
  };

  const handleSortChange = (sortValue: string) => {
    setSort(sortValue);
  };

  const [activeTab, setActiveTab] = useState('daily');

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
              <button
                className={`mr-4 py-2 px-4 rounded ${activeTab === 'daily' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                onClick={() => setActiveTab('daily')}
              >
                Daily Tasks
              </button>
              <button
                className={`py-2 px-4 rounded ${activeTab === 'weekly' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                onClick={() => setActiveTab('weekly')}
              >
                Weekly Tasks
              </button>
            </div>
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {activeTab === 'daily' && (
              <DailyTask tasks={dailyTasksFilteredAndSorted} onToggleComplete={handleToggleComplete} />
            )}
            {activeTab === 'weekly' && (
              <WeeklyTask tasks={weeklyTasksFilteredAndSorted} onToggleComplete={handleToggleComplete} />
            )}
            </motion.div>
            <ChatBot />
          </div>
      </ Layout>
    </div>
  );
}