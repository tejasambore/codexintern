import React, { useState } from "react";

const TaskItem = ({ task, deleteTask, updateTask, toggleTaskStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleUpdate = () => {
    if (newText.trim()) {
      updateTask(task.id, newText.trim());
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`flex items-center justify-between p-4 mb-2 border rounded-lg ${
        task.isDone ? "bg-green-100" : "bg-white"
      }`}
    >
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          className="flex-1 px-2 py-1 border rounded-lg"
        />
      ) : (
        <p
          className={`flex-1 ${
            task.isDone ? "line-through text-gray-500" : "text-gray-800"
          }`}
          onClick={() => toggleTaskStatus(task.id)}
        >
          {task.text}
        </p>
      )}
      <div className="flex gap-2">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="px-2 py-1 bg-green-500 text-white rounded-lg"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-2 py-1 bg-blue-500 text-white rounded-lg"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className="px-2 py-1 bg-red-500 text-white rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
