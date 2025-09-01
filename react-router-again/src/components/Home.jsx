import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';

function Home() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name'); 
  
  return (
    <div>
      <h1>Home Page</h1>
      {name && <p>Hello, {name}!</p>}
      <Link to="/about?ref=home">
        <button>About</button>
      </Link>
    </div>
  )
}

export default Home;
