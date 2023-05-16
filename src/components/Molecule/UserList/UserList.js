import React, { useState } from "react";
import UserName from "../../Atom/UserName/UserName";
import styles from './UserList.module.css'

function UserList({ tasks }) {
  const [pendingTasks, setPendingTasks] = useState(tasks);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  

  const handleTaskDelete = (taskId) => {
    const updatedTasks = pendingTasks.filter((task) => task.id !== taskId);
    setPendingTasks(updatedTasks);
  };

  const handleNewTaskChange = (event) => {
    setNewTaskTitle(event.target.value);
  };

  const handleNewTaskSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      completed: false,
    };
    setPendingTasks([...pendingTasks, newTask]);
    setNewTaskTitle("");
  };

  return (
    <div>
      <h2 className={styles.heading}>Add delete user functionality :</h2>
      <form onSubmit={handleNewTaskSubmit}>
        <input
        className={styles.inputBox}
          type="text"
          value={newTaskTitle}
          onChange={handleNewTaskChange}
          placeholder="Add new user"
        />
        <button type="submit">Enter</button>
      </form>
      {pendingTasks.map((task) => (
        <UserName
          key={task.id}
          task={task}
          onTaskDelete={handleTaskDelete}
        />
      ))}
    </div>
  );
}

export default UserList;
