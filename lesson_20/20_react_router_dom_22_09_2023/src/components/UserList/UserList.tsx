import React, { FC, useEffect, useState } from "react";
import User, { UserInterface } from "../UserProfile/UserProfile";

import style from "./UserList.module.css";

const UserList: FC = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);

  async function fetchActivity(): Promise<void> {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchActivity();
  }, []);

  return (
    <>
      <div className={style.container}>
        <h1 className={style.heading}>Users</h1>
        {users &&
          users.map((user) => (
            <User key={`${user.id}-${user.name}`} {...user} />
          ))}
      </div>
    </>
  );
};

export default UserList;
