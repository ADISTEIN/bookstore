import React from 'react'
import '../App';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
        <div>
          <Link to="/"> 
            <h1>Bookstore App</h1>
            </Link>
            </div>
        <div> 
            <Link to= "/favourites">
            <h3>Your Favourites</h3>
            </Link>
        </div>
    </div>
  )
}

export default Navbar