import Todos from '@/components/Todos';
import React, { Suspense } from 'react';

const TodosPage = () => {

 const todosPromise = fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
 return (
  <div>
   <Suspense  fallback={<h2 className='text-4xl'>Loading...</h2>}>
   <Todos todosPromise={todosPromise}></Todos>
   </Suspense>

  </div>
 );
};

export default TodosPage;