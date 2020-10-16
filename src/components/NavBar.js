import React from 'react'
import css from '../App.css'
import {Link} from 'react-router-dom'

export default function NavBar() {


  

    return (
 <nav >
<h3>Lambda Eats</h3>
<ul className='nav-links'>
<Link to='/'>
<li>Home</li>
</Link>
<Link to='/Order'>
<li>Order</li>
</Link>

</ul>
 </nav>
    )
}
