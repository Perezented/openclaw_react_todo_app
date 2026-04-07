import { useTodoStore } from './todoStore';
import { act, renderHook } from '@testing-library/react-hooks';

describe('Todo Store', () => {
  it('should add a todo', () => {
    const { result } = renderHook(() => useTodoStore());

    act(() => {
      result.current.addTodo('Test Todo');
    });

    expect(result.current.todos.length).toBe(1);
    expect(result.current.todos[0].text).toBe('Test Todo');
  });

  it('should toggle a todo', () => {
    const { result } = renderHook(() => useTodoStore());

    act(() => {
      result.current.addTodo('Toggle Todo');
    });

    const id = result.current.todos[0].id;

    act(() => {
      result.current.toggleTodo(id);
    });

    expect(result.current.todos[0].completed).toBe(true);
  });

  it('should delete a todo', () => {
    const { result } = renderHook(() => useTodoStore());

    act(() => {
      result.current.addTodo('Delete Me');
    });

    const id = result.current.todos[0].id;

    act(() => {
      result.current.deleteTodo(id);
    });

    expect(result.current.todos.length).toBe(0);
  });
});