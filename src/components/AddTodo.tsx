import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTodoStore } from '../store/todoStore';

export function AddTodo() {
  const [text, setText] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedText = text.trim();

    if (trimmedText.length > 0) {
      addTodo(trimmedText);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        className="w-full px-4 py-3 pr-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
      />
      <button
        type="submit"
        disabled={!text.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 rounded-md transition-colors"
        title="Add todo (Enter)"
      >
        <Plus size={18} className="text-white" />
      </button>
    </form>
  );
}
