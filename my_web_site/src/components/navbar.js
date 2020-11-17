import React, {useState} from 'react'
import { Router } from 'react-router-dom';
import { link } from 'react-router-dom';
function navbar() {


const [click, setClick] = useState(false);    
const handleClick = () => setClick(!click);

const closeMobileMenu = () => setClick(false);
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <link to="/" className="navbar-logo">
                    YANI <i className='fab fa-typo3'/>
                </link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className= {click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </link>
                    </li>
                </ul>    
            </div>
        </nav>
    )
}

export default navbar
