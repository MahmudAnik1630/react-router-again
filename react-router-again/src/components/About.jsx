import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';

function About() {
  const [searchParams] = useSearchParams();
  const ref = searchParams.get('ref'); 

  return (
    <div>
      <h1>About Page</h1>
      {ref && <p>Referred from: {ref}</p>}
      <Link to="/?name=Anik">
        <button>Home</button>
      </Link>
    </div>
  )
}

export default About;
