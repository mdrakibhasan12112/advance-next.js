
'use client'
import React, { useState } from 'react';


const Counter = () => {
const [count,setCount] = useState(0)

 console.log('count value', count);
 return (
  <div>
   <h3 className='text-4xl'>Coundown page:{count} </h3>
   <button onClick={()=> setCount(count+1)} className='btn '>Count Now</button>
  </div>
 );
};

export default Counter;