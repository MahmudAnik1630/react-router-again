import React from 'react';
import { useNavigate } from 'react-router-dom';

function OrderSummary() {
  const navigate = useNavigate(); // useNavigate hook

  return (
    <div>
      Order Placed!
      <br />
      <button
        onClick={() => navigate('/')} className='bg-red-500 text-white p-1 cursor-pointer ml-4 rounded'>Go Back</button>

       
        
    </div>
  );
}

export default OrderSummary;
