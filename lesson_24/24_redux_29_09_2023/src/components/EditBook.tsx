import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal/Modal";

interface Props {
  book: {
    isbn: string;
    title: string;
    author: string;
    year: number;
  };
}

const EditBook: FC<Props> = ({ book }): JSX.Element => {
  const { isbn, title, author, year } = book;
  const [editTitle, setEditTitle] = useState<string>("");

  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleClick = (): void => {
    // dispatch({type: "books/editTitle", })
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch({ type: "books/editTitle", payload: { isbn, title: editTitle } });
    setIsModalActive(!isModalActive);
  };

  return (
    <>
      <button
        style={{ marginLeft: "5px" }}
        type="button"
        onClick={() => setIsModalActive(true)}
      >
        EditTitle
      </button>
      <Modal active={isModalActive} setActive={setIsModalActive}>
        <form onSubmit={onSubmit}>
          <h2>Edit text</h2>
          <div>Author: {author}</div>
          <div>
            Title:{" "}
            <input
              type="text"
              placeholder={title}
              onChange={(e) => setEditTitle(e.target.value)}
            ></input>
          </div>
          <div>Year: {year}</div>
          <input type="submit" value="Save" />
        </form>
      </Modal>
    </>
  );
};

export default EditBook;
