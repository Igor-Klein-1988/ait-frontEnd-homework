import React, { FC, ReactNode } from "react";
import style from './Modal.module.css';


interface ModalProps {
    active: boolean;
    setActive: (active: boolean) => void;
    children: ReactNode;
  }

const Modal: FC<ModalProps> = ({ active, setActive, children }): JSX.Element => {
  return (
    <div
      className={active ? `${style.modal} ${style.active}` : style.modal}
      onClick={() => setActive(!active)}
    >
      <div
        className={active ? `${style.modal__content} ${style.active}` : style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
