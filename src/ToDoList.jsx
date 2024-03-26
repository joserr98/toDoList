import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Take a shower",
    "Walk the dog",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "" && newTask.length > 10) {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    } else {
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];

      setTasks(updatedTasks);
    }
  }

  return (
    <div className="toDoList">
      <h1>✔️ To Do List ❌</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="addButton" onClick={addTask}>
          {" "}
          Add{" "}
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button
              className="deleteButton"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button className={`moveButton ${index === 0 ? "notAllowed" : ""}`} onClick={() => moveTaskUp(index)}>
              ⬆︎
            </button>
            <button className={`moveButton ${index === tasks.length - 1 ? "notAllowed" : ""}`} onClick={() => moveTaskDown(index)}>
              ⬇︎
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
