import React from 'react';
import {Link} from "react-router-dom";

function HomePage() {
  return (
    <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log in</Link>
    </div>
  )
}

export default HomePage;