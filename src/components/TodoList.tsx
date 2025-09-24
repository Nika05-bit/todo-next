"use client"; // Required for hooks in Next.js App Router

import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editInput, setEditInput] = useState("");

  // Add todo
  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([...todos, input.trim()]);
    setInput("");
  };

  // Delete todo
  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Start editing
  const startEditing = (index: number) => {
    setEditingIndex(index);
    setEditInput(todos[index]);
  };

  // Save edited todo
  const saveEdit = () => {
    if (editingIndex === null) return;
    const updatedTodos = [...todos];
    updatedTodos[editingIndex] = editInput.trim();
    setTodos(updatedTodos);
    setEditingIndex(null);
    setEditInput("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">My Todos</h2>

      {/* Input + Add */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter todo"
          className="flex-grow border rounded px-2 py-1"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center border px-2 py-1 rounded"
          >
            <span>{todo}</span>
            <div className="flex gap-2">
              <button
                onClick={() => startEditing(index)}
                className="bg-yellow-500 text-black px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(index)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Edit Modal */}
      {editingIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-80">
            <h3 className="text-lg font-bold mb-3">Edit Todo</h3>
            <input
              type="text"
              value={editInput}
              onChange={(e) => setEditInput(e.target.value)}
              className="w-full border rounded px-2 py-1 mb-3"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditingIndex(null)}
                className="px-4 py-2 rounded border"
              >
                Cancel
              </button>
              <button
                onClick={saveEdit}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}