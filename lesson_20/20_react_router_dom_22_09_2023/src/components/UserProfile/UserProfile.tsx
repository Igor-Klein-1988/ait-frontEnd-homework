import React, { FC, useState } from "react";

import style from "./UserProfile.module.css";

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

const UserProfile: FC<UserInterface> = (props) => {
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

  const [userInfoVisible, setUserInfoVisible] = useState<boolean>(false);

  const handleClick = () => {
    setUserInfoVisible(!userInfoVisible); // Переключаем значение userInfoVisible
  };

  const phoneReadable = (phone: string): string => phone.split(" ")[0];

  return (
    <div className={style.container} onClick={handleClick}>
      <h2 className={style.heading}>{name}</h2>
      {userInfoVisible && (
        <div className={style.userInfo}>
          <p>
            <strong> Username: {username}</strong>
          </p>
          <p>
            <strong> Email: {email}</strong>
          </p>
          <p>
            <strong> Phone: {phoneReadable(phone)}</strong>
          </p>
          <p>
            <strong>
              {" "}
              Address: {zipcode}, {city}, {street}, {suite}
            </strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
