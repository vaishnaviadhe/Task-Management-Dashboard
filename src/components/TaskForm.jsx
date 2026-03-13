import { useState, useEffect, useRef} from "react";

function TaskForm({ addTask, editingTask, updateTask}) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [dueDate, setDueDate] = useState("");
  const formRef = useRef(null);


  useEffect(() => {
    if (editingTask && formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [editingTask]);

  useEffect(() => {

    if (editingTask) {
        setTitle(editingTask.title);
        setDescription(editingTask.description);
        setStatus(editingTask.status);
        setDueDate(editingTask.dueDate);
    }

  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      alert("Title is required");
      return;
    }

    const newTask = {
      id: Date.now(),
      title,
      description,
      status,
      dueDate
    };

    if (editingTask) {
        updateTask({ ...newTask, id: editingTask.id });
    } else {
        addTask(newTask);
    }

    setTitle("");
    setDescription("");
    setStatus("Pending");
    setDueDate("");
  };

  return (
    <form className="task-form" ref={formRef} onSubmit={handleSubmit}>

      <h3>Add New Task</h3>

      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>

      <br />

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <br />

      <button type="submit" className="add-btn">
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}

export default TaskForm;