import { act } from '@testing-library/react';
import { useTodoStore } from './todoStore';

describe('Todo Store', () => {
  beforeEach(() => {
    // Clear the store before each test
    useTodoStore.setState({ todos: [], filter: 'all' });
  });

  it('should add a todo', () => {
    act(() => {
      useTodoStore.getState().addTodo('Test Todo');
    });

    const todos = useTodoStore.getState().todos;
    expect(todos.length).toBe(1);
    expect(todos[0].text).toBe('Test Todo');
  });

  it('should toggle a todo', () => {
    act(() => {
      useTodoStore.getState().addTodo('Toggle Todo');
    });

    const id = useTodoStore.getState().todos[0].id;

    act(() => {
      useTodoStore.getState().toggleTodo(id);
    });

    expect(useTodoStore.getState().todos[0].completed).toBe(true);
  });

  it('should delete a todo', () => {
    act(() => {
      useTodoStore.getState().addTodo('Delete Me');
    });

    const id = useTodoStore.getState().todos[0].id;

    act(() => {
      useTodoStore.getState().deleteTodo(id);
    });

    expect(useTodoStore.getState().todos.length).toBe(0);
  });
});