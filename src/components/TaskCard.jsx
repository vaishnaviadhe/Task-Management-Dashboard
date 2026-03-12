function TaskCard({ task, deleteTask, setEditingTask }) {

  return (
    <div className="task-card">

        <h3>{task.title}</h3>

        <p>{task.description}</p>

        <p className={`status ${
            task.status === "Pending"
                ? "pending"
                : task.status === "In Progress"
                ? "progress"
                : "completed"
        }`}>
            {task.status}
        </p>

        <p>Due Date: {task.dueDate}</p>
        
        <div className="button-group">
            <button
                className="edit-btn"
                onClick={() => setEditingTask(task)}
            >
                Edit
            </button>

            <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
            >
                Delete
            </button>
        </div>

    </div>
  );
}

export default TaskCard;