import { useState } from "react";
import tasksData from "../data/tasks.json";
import TaskCard from "../components/TaskCard";
import TaskForm from "../components/TaskForm";
import FilterBar from "../components/FilterBar";

function Dashboard() {

  const [tasks, setTasks] = useState(tasksData);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredTasks =
    filter === "All"
        ? tasks
        : tasks.filter((task) => task.status === filter);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const updateTask = (updatedTask) => {

    const updatedTasks = tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
    );

    setTasks(updatedTasks);
    setEditingTask(null);

  };


  return (
    <div className="dashboard-container">

      <h2>Task Dashboard</h2>

      <TaskForm 
        addTask={addTask}
        editingTask={editingTask}
        updateTask={updateTask}
      />

      <FilterBar setFilter={setFilter} />

      <h3 style={{ textAlign: "center", width: "100%", marginTop: "20px" }}>
  Task List
</h3>

      <div className="task-grid">
        {filteredTasks.map((task) => (
            <TaskCard
                key={task.id}
                task={task}
                deleteTask={deleteTask}
                setEditingTask={setEditingTask}
            />
        ))}
      </div>

      </div>
  );
}

<p style={{textAlign:"center", marginTop:"40px"}}>
  Task Management Dashboard
</p>

export default Dashboard;