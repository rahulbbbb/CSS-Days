import React from "react";
import styles from './UserName.module.css'


function UserName({ task, onTaskDelete }) {
  return (
    <div className={styles.inputBox}>
      <span>
        {task.title}
      </span>

      
      <button className={styles.btn}  onClick={() => onTaskDelete(task.id)}>Delete</button>
    </div>
  );
}

export default UserName;
