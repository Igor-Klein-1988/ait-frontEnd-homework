import React, { FC } from "react";

const PUBLIC_URL = process.env.PUBLIC_URL;

const Body: FC = () => {
  return (
    <main>
      <section className="left">
        <img src={`${PUBLIC_URL}/main.jpg`} alt="hero" />
      </section>
      <section className="right">
        <h2>Dream Team</h2>
        <img src={`${PUBLIC_URL}/friend1.jpg`} alt="friend1" />
        <img src={`${PUBLIC_URL}/friend2.jpg`} alt="friend2" />
        <img src={`${PUBLIC_URL}/friend3.jpg`} alt="friend3" />
        <img src={`${PUBLIC_URL}/friend4.jpg`} alt="friend4" />
        <img src={`${PUBLIC_URL}/friend5.jpg`} alt="friend5" />
        <img src={`${PUBLIC_URL}/friend6.jpg`} alt="friend6" />
        <img
          className="bottomLeft"
          src={`${PUBLIC_URL}/friend7.jpg`}
          alt="friend7"
        />
        <img src={`${PUBLIC_URL}/friend8.jpg`} alt="friend8" />
        <img
          className="bottomRight"
          src={`${PUBLIC_URL}/friend9.jpg`}
          alt="friend9"
        />
      </section>
      <p className="farGalaxy">
        Давным-давно в далекой Галактике... Старая Республика пала. На ее руинах
        Орден ситов создал галактическую Империю, подчиняющую одну за другой
        планетные системы. Силы Альянса стремятся свергнуть Темного Императора и
        восстановить свободное правление в Галактике. Генерал Оби-Ван Кеноби
        возвращается после многолетнего уединения, чтобы снова сойтись в
        поединке с Повелителем Тьмы Дартом Вейдером. Вместе с ним на светлой
        стороне Силы – юный пилот Люк, сын Анакина Скайуокера, принцесса-сенатор
        Лейя Органа, легендарный коррелианский контрабандист Хан Соло и его друг
        вуки Чубакка.
      </p>
    </main>
  );
};

export default Body;
