import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import AddBook from "./AddBook";
import EditTitle from "./EditBook";

const BooksManager: FC = (): JSX.Element => {
  const books = useSelector((state: RootState) => state.books.books);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Books Manager</h1>
      <AddBook />
      <div className="grid-container">
        <div className="book-header">Author</div>
        <div className="book-header">Title</div>
        <div className="book-header">Year</div>
        <div className="book-header">Actions</div>
        {books.map(({ isbn, title, author, year }) => (
          <React.Fragment key={isbn}>
            <div>{author}</div>
            <div>{title}</div>
            <div style={{ fontSize: "0.8em" }}>{year}</div>
            <EditTitle book={{ isbn, title, author, year }} />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default BooksManager;
