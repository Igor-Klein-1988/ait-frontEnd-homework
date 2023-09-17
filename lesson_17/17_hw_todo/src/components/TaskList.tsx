import React, { FC, useState } from "react";
import Task from "./Task";

const TaskList: FC = (): JSX.Element => {
  interface Task {
    taskID: number;
    taskName: string;
  }
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskId, setTaskId] = useState<number>(0);
  const [taskName, setTaskName] = useState<string>("");

  const addTask = (): void => {
    if (taskName.trim() === "") {
      return;
    }
    setTaskList((prevTaskList) => [
      ...prevTaskList,
      { taskID: taskId, taskName },
    ]);
    setTaskId(taskId + 1);
    setTaskName("");
  };

  const onDeleteTask = (taskId: number) => {
    const updatedTaskList = taskList.filter((task) => task.taskID !== taskId);
    setTaskList(updatedTaskList);
  };

  return (
    <>
      <div className="container">
        <h1>TODO List App</h1>
        <div className="input-container">
          <input
            type="text"
            id="taskInput"
            placeholder="Enter a task..."
            value={taskName}
            onChange={({ target: { value } }) => setTaskName(value)}
          />
          <button id="addTask" onClick={addTask}>
            Add Task
          </button>
        </div>
        <ol id="taskList">
          {taskList.map((task) => (
            <Task
              key={`taskComponent-${task.taskID}`}
              id={task.taskID}
              taskName={task.taskName}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </ol>
      </div>
    </>
  );
};

export default TaskList;
