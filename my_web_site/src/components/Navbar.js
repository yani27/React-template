import React, {Component, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
const [click, setClick] = useState(false);    
var [button, setButton] = useState(true)

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const showButton = () => {

    if (window.innerWidth > 960){
        setButton =(true);
    }
    else{
        setButton =(false);
    }
};

window.addEventListener('resize',showButton);

useEffect(() => {
    showButton(false);
},[])

return (
    <>    
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    YANI <i className='fab fa-typo3'/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className= {click ? 'fas fa-times' :'fas fa-bars'}/>
                </div>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            home
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/service' className='nav-links' onClick={closeMobileMenu}>
                            service
                        </Link>
                    </li> 
                    
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            contact
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                         sign-up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>
                               SIGN-UP
                            </Button>}
            </div>
        </nav>
    </>
    );
}

export default Navbar;
