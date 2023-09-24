import React, { FC, useEffect, useState } from "react";
import { UserInterface } from "../UserProfile/UserProfile";

import style from "./Task.module.css";
import { BeatLoader } from "react-spinners";

export interface TaskInterface {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Task: FC<TaskInterface> = (props) => {
  const { userId, id, title, completed } = props;
  const [taskInfoVisible, setTaskInfoVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [userProfile, setUserProfile] = useState<UserInterface>(
    {} as UserInterface
  );

  async function fetchUserProfile(id: number): Promise<void> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!res.ok && res.status === 404) {
      setUserProfile({
        username: "User not found",
        email: "N/A",
        phone: "N/A",
      } as UserInterface);

      return;
    }

    const data = await res.json();
    setUserProfile(data);
  }

  useEffect(() => {
    if (taskInfoVisible) {
      fetchUserProfile(userId);
    }
  }, [taskInfoVisible, userId]);

  const handleClick = () => {
    if (!taskInfoVisible) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 450);
    }
    setTaskInfoVisible(!taskInfoVisible);
  };

  const { username, email, phone } = userProfile;

  return (
    <div className={style.container} onClick={handleClick}>
      <h2 className={style.taskHeading}>{title}</h2>
      {taskInfoVisible && (
        <>
          {loading ? (
            <div className={style.spinner}>
              <BeatLoader
                color={"#e86523"}
                loading={true}
                size={80}
                speedMultiplier={1}
                aria-label="Loading Spinner"
              />
            </div>
          ) : (
            <>
              <div className={style.taskInfo}>
                <h3>Task info:</h3>
                <p>
                  <strong> Completed: {String(completed)}</strong>
                </p>
                <p>
                  <strong> id: {id}</strong>
                </p>
              </div>
              <div className={style.userInfo}>
                <h3>User info:</h3>
                <p>
                  <strong> Username: {username}</strong>
                </p>
                <p>
                  <strong> Email: {email}</strong>
                </p>
                <p>
                  <strong> Phone: {phone}</strong>
                </p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Task;
