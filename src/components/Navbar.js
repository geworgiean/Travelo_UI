import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'


function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const handlClick = () => setClick(!click)
  const closmobileMenu = () => setClick(false)
  const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false)
    } else{
        setButton(true)
    }
  }
    useEffect(()=> {
        showButton();
    }, []);
    window.addEventListener("resize", showButton)

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logon' onClick={closmobileMenu}>
                    ARMN
                </Link>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closmobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Services' className='nav-links' onClick={closmobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Products' className='nav-links' onClick={closmobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className='nav-links'>
                        <Link to='/Singup' className='nav-links-mobile' onClick={closmobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {
                    button && <Button buttonStyle="btn--outline">Sign Up</Button>
                }
            </div>
        </nav>
    </>
  )
}

export default Navbar