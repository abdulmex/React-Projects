export function Task({ item, onDeleteTask, onToggleTask }) {
  return (
    <li className="mx-auto">
      <input
        type="checkbox"
        value={item.done}
        onChange={() => onToggleTask(item.id)}
      />
      <span style={item.done ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button className="ms-2 item-btn" onClick={() => onDeleteTask(item.id)}>
        ❌
      </button>
    </li>
  );
}
