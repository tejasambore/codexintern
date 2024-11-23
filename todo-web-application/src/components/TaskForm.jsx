import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTask({ id: uuidv4(), text: text.trim(), isDone: false });
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 mb-6"
    >
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
