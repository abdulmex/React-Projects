import { useState } from "react";

export function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newTask = { description, done: false, id: Date.now() };
    console.log(newTask);

    onAddTask(newTask);

    setDescription("");
  }
  return (
    <form className="container my-5" onSubmit={handleSubmit}>
      <div className="row mx-auto">
        <div className="col-lg-8 col-md-8 col-sm-6">
          <input
            type="text"
            // name="text"
            className="form-control input"
            placeholder="Add new Task..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="col-lg-2 col-md-2 col-sm-6 mt-4 mt-md-0 text-center">
          <button className="px-5 btns">Add</button>
        </div>
      </div>
    </form>
  );
}
