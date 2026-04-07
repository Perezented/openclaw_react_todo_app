import { useState } from 'react';
import { CheckCircle, Circle, Trash, Edit3, Save } from 'lucide-react';
import { useTodoStore } from '../store/todoStore';
import type { Todo } from '../store/todoStore';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { toggleTodo, deleteTodo, updateTodo } = useTodoStore();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <button
          type="button"
          onClick={() => toggleTodo(todo.id)}
          className="shrink-0 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
        >
          {todo.completed ? (
            <CheckCircle size={20} className="text-green-500" />
          ) : (
            <Circle size={20} className="text-gray-400" />
          )}
        </button>
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded p-1 focus:outline-none"
          />
        ) : (
          <span
            className={`break-all text-gray-900 dark:text-white font-medium ${
              todo.completed ? 'line-through text-gray-400 dark:text-gray-500' : ''
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="p-1 text-blue-500 hover:text-blue-700"
          >
            <Save size={16} />
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="p-1 text-gray-500 hover:text-gray-700"
          >
            <Edit3 size={16} />
          </button>
        )}
        <button
          onClick={() => deleteTodo(todo.id)}
          className="p-1 text-red-500 hover:text-red-700"
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
}