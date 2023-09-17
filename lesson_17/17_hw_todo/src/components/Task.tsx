import React, { FC, useState } from "react";

interface TaskProps {
  id: number;
  taskName: string;
  onDeleteTask: (taskId: number) => void;
}

const Task: FC<TaskProps> = (props) => {
  const { id, taskName, onDeleteTask } = props;
  const [isTextCrossedOut, setIsTextCrossedOut] = useState<boolean>();

  const textStyles = {
    textDecoration: isTextCrossedOut ? "line-through" : "none",
  };

  const handleDeleteClick = () => {
    onDeleteTask(id);
  };
  return (
    <>
      <li key={`task-${id}-${taskName}`}>
        <span style={textStyles}>{taskName}</span>
        <input
          type="checkbox"
          onClick={(): void => setIsTextCrossedOut(!isTextCrossedOut)}
        />
        <button onClick={handleDeleteClick}>Delete</button>
      </li>
    </>
  );
};

export default Task;
