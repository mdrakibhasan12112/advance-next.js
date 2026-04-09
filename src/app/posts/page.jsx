import React from 'react';

const PostPage = async () => {
 const res = await fetch('https://jsonplaceholder.typicode.com/posts');
 const posts = await res.json()


 return (
  <div>
   {
    posts.map(post => <div key={post.id}>
     <h1>{ post.title}</h1>
    </div>)
   }
  </div>
 );
};

export default PostPage;