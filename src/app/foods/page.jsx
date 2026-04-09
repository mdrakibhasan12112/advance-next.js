import FoodCard from '@/components/FoodCard/FoodCard';
import React from 'react';

const FoodsPage = async () => {
  const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods');
  const data = await res.json();
  const foods = data.data;
  console.log(foods);

  return (
    <div>
      <h1>Foods: {foods.length}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {foods.map(food => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
