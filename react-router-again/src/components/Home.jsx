import React from 'react';
import { useNavigate,useSearchParams, Link } from 'react-router-dom';


function Home() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name'); 

  const navigate = useNavigate();
  
  return (
    <div>
      <h1>Home Page</h1>
      {name && <p>Hello, {name}!</p>}
      <Link to="/about?ref=home">
        <button className='bg-red-500 rounded p-1 cursor-pointer mb-4 ml-4'>About</button>
      </Link>
    <br />
      <button onClick={()=>navigate('order-summary')} className='bg-red-500 rounded p-1 cursor-pointer ml-4'>Place Order</button>
    </div>
  )
}

export default Home;
