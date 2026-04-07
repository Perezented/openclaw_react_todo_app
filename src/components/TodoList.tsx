
import { TodoItem } from './TodoItem';
import { useTodoStore } from '../store/todoStore';

export function TodoList() {
  const { todos, filter } = useTodoStore();

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <ul className="space-y-2">
      {filteredTodos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
}