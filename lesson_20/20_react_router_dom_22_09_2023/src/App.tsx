import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Posts from './components/Posts';
import Comments from './components/Comments';
import UserList from './components/UserList/UserList';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<UserList />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/comments' element={<Comments />} />
          <Route path='/todo' element={<TodoList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
