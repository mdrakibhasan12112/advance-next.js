import React from 'react';

const FoodsPage = async () => {
 
 const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
 const data = await res.json()
 const foods = data.data 
 console.log(foods);

 return (
  <div>
   <h1>Foods: { foods.length}</h1>
  </div>
 );
};

export default FoodsPage;