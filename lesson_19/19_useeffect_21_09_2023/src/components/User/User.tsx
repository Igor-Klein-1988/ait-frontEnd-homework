import React, { FC } from "react";

import style from "./User.module.css";

export interface UserInterface {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: number;
      lng: number;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const User: FC<UserInterface> = (props) => {
  const {
    id,
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
      geo: { lat, lng },
    },
    phone,
    website,
    company: { name: companyName, catchPhrase, bs },
  } = props;
  return (
    <div className={style.container}>
      <h2 className={style.heading}>{name}</h2>
      <p>
        <strong> Username: {username}</strong>
      </p>
      <p>
        <strong> Email: {email}</strong>
      </p>
      <p>
        <strong> Phone: {phone}</strong>
      </p>
      <p>
        <strong>
          {" "}
          Address: {zipcode}, {city}, {street}, {suite}
        </strong>
      </p>
    </div>
  );
};

export default User;
