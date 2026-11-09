"use client";

import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [newTitle, setNewTitle] = useState("");

  return (
    <div id="wd-react-context-todo-list">
      <h3>Todo List (Context)</h3>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="New todo title"
        id="wd-context-todo-new-title"
        className="me-2 rounded border border-neutral-300 px-3 py-1.5"
      />
      <button
        type="button"
        onClick={() => {
          if (!newTitle.trim()) return;
          addTodo(newTitle.trim());
          setNewTitle("");
        }}
        id="wd-context-todo-add-click"
        className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Add
      </button>
      <ul className="m-0 mt-3 max-w-md list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mb-1 flex items-center gap-2 rounded border border-neutral-200 bg-neutral-50 px-3 py-1"
          >
            <input
              type="text"
              value={todo.title}
              onChange={(e) => updateTodo(todo.id, e.target.value)}
              id={`wd-context-todo-title-${todo.id}`}
              className="flex-1 rounded border border-neutral-300 px-2 py-1"
            />
            <button
              type="button"
              onClick={() => deleteTodo(todo.id)}
              id={`wd-context-todo-delete-${todo.id}-click`}
              className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
