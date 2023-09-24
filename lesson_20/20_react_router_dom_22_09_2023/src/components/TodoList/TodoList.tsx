import React, { FC, useEffect, useState } from "react";
import Task, { TaskInterface } from "../Task/Task";

const TodoList: FC = () => {
  const [toDoList, setToDoList] = useState<TaskInterface[]>([]);

  async function fetchActivity(): Promise<void> {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    setToDoList(data);
  }

  useEffect(() => {
    fetchActivity();
  }, []);
  return (
    <ul>
      {toDoList &&           
      // <Task {...toDoList[0]} />

        toDoList.map((task) => (
          <Task key={`${task.id}-${task.userId}`} {...task} />
        ))
      }
    </ul>
  );
};

export default TodoList;
