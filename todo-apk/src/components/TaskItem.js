import { Task } from "./Task";
export function TaskItem({ task, onDeleteTask, onToggleTask }) {
  return (
    <div className="container list">
      <ul>
        {task.map((item) => (
          <Task
            item={item}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}
