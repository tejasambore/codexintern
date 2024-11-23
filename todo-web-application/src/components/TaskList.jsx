import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, updateTask, toggleTaskStatus }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
            toggleTaskStatus={toggleTaskStatus}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">
          No tasks available. Add a task!
        </p>
      )}
    </div>
  );
};

export default TaskList;
