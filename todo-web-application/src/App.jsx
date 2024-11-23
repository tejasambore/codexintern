import React, { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskFilters from "./components/TaskFilters";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));
  const updateTask = (id, updatedText) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: updatedText } : task
      )
    );
  const toggleTaskStatus = (id) =>
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "active"
      ? tasks.filter((task) => !task.isDone)
      : tasks.filter((task) => task.isDone);

  return (
    <div className="max-w-3xl mx-auto bg-gray-50 shadow-lg rounded-lg p-6 mt-10">
      <Header />
      <TaskForm addTask={addTask} />
      <TaskFilters setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        updateTask={updateTask}
        toggleTaskStatus={toggleTaskStatus}
      />
    </div>
  );
};

export default App;
