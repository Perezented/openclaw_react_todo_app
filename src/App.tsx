// import React from 'react';
import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { useTodoStore } from './store/todoStore';

export default function App() {
  const { filter, setFilter, clearCompleted } = useTodoStore();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Todo App
        </h1>
        <AddTodo />
        <TodoList />
        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-2 py-1 border rounded ${
                filter === 'all'
                ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`px-2 py-1 border rounded ${
                filter === 'active'
                ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              Active
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-2 py-1 border rounded ${
                filter === 'completed'
                ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
              }`}
            >
              Completed
            </button>
          </div>
          <button
            onClick={clearCompleted}
            className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Clear Completed
          </button>
        </div>
      </div>
    </div>
  );
}