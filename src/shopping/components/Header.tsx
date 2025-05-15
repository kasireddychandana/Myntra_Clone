import logo from '../../assets/logo.jpg'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="headersection">
      
       <img className='title' src={logo} alt='myntra'/>

  
      <div className="center">
       <ul>
        <li><NavLink to="/"  className={({ isActive }) => isActive ? 'active-link' : ''}>All</NavLink></li>
        <li><NavLink to="/women"  className={({ isActive }) => isActive ? 'active-link' : ''}>Women</NavLink></li>
         <li><NavLink to="/men" className={({ isActive }) => isActive ? 'active-link' : ''}>Men</NavLink></li>
          <li><NavLink to="/kids" className={({ isActive }) => isActive ? 'active-link' : ''}>Kids</NavLink></li>
           <li><NavLink to="/beauty" className={({ isActive }) => isActive ? 'active-link' : ''}>Beauty</NavLink></li>
       </ul>
       </div>
       <div className="search">
        <input type="text" placeholder=' search...'/>
       </div>
      
       <div className="signin">
        <NavLink to="/signinsignup"  className={({ isActive }) => isActive ? 'active-link' : ''}>
        Sign In / Sign Up</NavLink>
       </div>
       <div className="cart">
        <NavLink to="/cart"  className={({ isActive }) => isActive ? 'active-link' : ''}>
        Cart</NavLink>
       </div>
    
  </div>
  )
}

export default Header