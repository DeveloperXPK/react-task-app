import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TasksForm() {
  const { createTasks } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTasks({
      title,
      description,
    });
    setDescription("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
        <h1 className="text-2xl mb-3 font-bold text-white">Create Task</h1>
        <input
          placeholder="Write your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          autoFocus
        />
        <textarea
          placeholder="Description about your task"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
        ></textarea>
        <button className=" text-white bg-indigo-500 hover:bg-indigo-400 rounded-md px-3 py-1 mt-4">Guardar</button>
      </form>
    </div>
  );
}

export default TasksForm;
