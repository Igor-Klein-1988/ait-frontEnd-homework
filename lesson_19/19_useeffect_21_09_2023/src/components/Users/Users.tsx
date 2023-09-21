import React, { FC, useEffect, useState } from "react";
import User, { UserInterface } from "../User/User";

import style from "./Users.module.css";

const Users: FC = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
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

export default Users;
