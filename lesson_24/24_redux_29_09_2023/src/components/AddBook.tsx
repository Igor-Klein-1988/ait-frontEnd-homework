import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

const AddBook: FC = (): JSX.Element => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const currentYear = new Date().getUTCFullYear();
  const [year, setYear] = useState<number>(currentYear);
  const dispatch = useDispatch();

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    dispatch({ type: "books/add", payload: { title, year, author } });
    setAuthor("")
    setTitle("")
    setYear(currentYear)
  };

  return (
    <form className="app__searchForm" onSubmit={onSubmit}>
      <h3>Add Book</h3>
      <input
        type="text"
        placeholder="enter title"
        autoComplete="Off"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter author"
        autoComplete="Off"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="number"
        autoComplete="Off"
        value={year}
        onChange={(e) => setYear(parseInt(e.target.value))}
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default AddBook;
