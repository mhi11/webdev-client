import { createContext, useContext, useState, type ReactNode } from "react";
import { createElement } from "react";

export type Todo = {
  id: string;
  title: string;
};

type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

const INITIAL_TODOS: Todo[] = [
  { id: "1", title: "Buy milk" },
  { id: "2", title: "Feed the pets" },
];

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>(INITIAL_TODOS);

  const addTodo = (title: string) => {
    setTodos([...todos, { id: crypto.randomUUID(), title }]);
  };

  const updateTodo = (id: string, title: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title } : todo)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return createElement(
    TodosContext.Provider,
    { value: { todos, addTodo, updateTodo, deleteTodo } },
    children,
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return value;
}
