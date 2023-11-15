import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { Header } from "./Header";
import { Form } from "./Form";
import { TaskItem } from "./TaskItem";
import { Footer } from "./Footer";

export default function App() {
  const [task, setTask] = useState([]);

  function handleAddTask(item) {
    setTask((tasks) => [...tasks, item]);
  }

  function handleDeleteTask(id) {
    setTask((tasks) => task.filter((task) => task.id !== id));
  }

  function handleToggleTask(id) {
    setTask((prevState) => {
      return prevState.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      );
    });
  }

  function handleClearTask() {
    const confirm = window.confirm(
      "Are you sure you want to delete all tasks?"
    );
    if (confirm) setTask([]);
  }

  return (
    <div>
      <Header />
      <Form onAddTask={handleAddTask} />
      <TaskItem
        task={task}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
      <Footer OnClearTask={handleClearTask} />
    </div>
  );
}
