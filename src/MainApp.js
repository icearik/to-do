import { useState, useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import React from "react";
import Button  from "./components/Button";
import { auth } from "./firebase";

function MainApp() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [upd, setUpd] = useState(false);
  const [updId, setUpdId] = useState(-1);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  // Add Tasks
  const addTask = async (task) => {
    if (!upd) setUpd(!upd);
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
    setShowAddTask(!showAddTask);
  };

  // Delete tasks
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Update tasks
  const updateTask = async (task) => {
    const updTask = { ...task, id: updId };

    const res = await fetch(`http://localhost:5000/tasks/${updId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === updId ? { ...task, text: data.text, desc: data.desc } : task
      )
    );

    setShowAddTask(!showAddTask);
    setUpd(!upd);
    setUpdId(-1);
  };

  const updVars = (id) => {
    if (!showAddTask) setShowAddTask(!showAddTask);
    setUpd(!upd);
    setUpdId(id);
  };

  const signOut = () => auth.signOut();

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={upd ? updateTask : addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onUpdate={updVars} />
      ) : (
        "The list is empty"
      )}
       <header className='header'>
          <h4>Thank you for using the app</h4>
          <Button color={'red'} text={'Sign Out'} onClick={signOut}/>
        </header>
    </div>
  );
}

export default MainApp;
