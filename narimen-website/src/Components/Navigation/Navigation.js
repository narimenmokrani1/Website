import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import style from './Navigation.css'
function Navigation(props) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const handleToggle = () => {
			setNavbarOpen(!navbarOpen);
		};
    return (
			<nav className='navBar'>
				<button onClick={handleToggle}>
					{navbarOpen ? (
						<MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
					) : (
						<FiMenu
							style={{ color: '#7b7b7b', width: '40px', height: '40px' }}
						/>
					)}
				</button>
				<ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
                    <li>Login</li>
                    <li>Food List</li>
                    <li>Home</li>
                    <li>About</li>
                </ul>
			</nav>
		);
}

export default Navigation;