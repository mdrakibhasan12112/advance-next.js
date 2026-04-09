import Image from 'next/image';
import React from 'react';

const FoodDetailPage = async ({ params }) => {
  const { foodId } = await params;
const res = await fetch(
 `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
 const data = await res.json()
 // const food = data.data 
 const {image_link,dish_name,id,main_ingredients} = data.data 
 
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-10 pt-10">
        <Image src={image_link} alt={dish_name} width={600} height={500} />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{dish_name}</h2>
        <p>{main_ingredients}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailPage;