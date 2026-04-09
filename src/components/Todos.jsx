'use client'
import React, { use } from 'react';

const Todos = ({ todosPromise }) => {
 const todos = use(todosPromise)
 console.log(todos);
 return (
  <div>
   <h1> Todos Length: { todos.length}</h1>
  </div>
 );
};

export default Todos;