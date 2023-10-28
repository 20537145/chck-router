import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Navlayout() {
  return (
    <div >
        <nav className='navlink'>
            <ul>
                <li><NavLink to='/' > Home</NavLink></li>
                <li> <NavLink to='movies' >Go to movies</NavLink></li>
                
            </ul>
        </nav>
        <Outlet/>
    </div>
    
  )
}

export default Navlayout