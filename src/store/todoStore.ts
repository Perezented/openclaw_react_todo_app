import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  updatedAt: number;
}

export type FilterType = 'all' | 'active' | 'completed';

interface TodoStore {
  todos: Todo[];
  filter: FilterType;
  addTodo: (text: string) => void;
  updateTodo: (id: string, text: string) => void;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  clearCompleted: () => void;
  setFilter: (filter: FilterType) => void;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      todos: [],
      filter: 'all',
      
      addTodo: (text: string) => {
        const now = Date.now();
        set((state) => ({
          todos: [
            {
              id: crypto.randomUUID(),
              text,
              completed: false,
              createdAt: now,
              updatedAt: now,
            },
            ...state.todos,
          ],
        }));
      },
      
      updateTodo: (id: string, text: string) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, text, updatedAt: Date.now() } : todo
          ),
        }));
      },
      
      deleteTodo: (id: string) => {
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },
      
      toggleTodo: (id: string) => {
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed, updatedAt: Date.now() } : todo
          ),
        }));
      },
      
      clearCompleted: () => {
        set((state) => ({
          todos: state.todos.filter((todo) => !todo.completed),
        }));
      },
      
      setFilter: (filter: FilterType) => {
        set({ filter });
      },
    }),
    {
      name: 'todos-storage',
      storage: {
        getItem: (key) => {
          const value = localStorage.getItem(key);
          return Promise.resolve(value ? JSON.parse(value) : null);
        },
        setItem: (key, value) => {
          localStorage.setItem(key, JSON.stringify(value));
          return Promise.resolve();
        },
        removeItem: (key) => Promise.resolve(localStorage.removeItem(key)),
      },
    }
  )
);
