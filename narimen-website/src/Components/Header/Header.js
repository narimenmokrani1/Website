import React from 'react';
import style from './Header.css'
function Header(props) {
    return (
			<header>
				<ul className='header transparent-bg'>
					<li className='ligin'>Login</li>
					<li className='food_list'>Food list</li>
					<li className='home'>Home</li>
				</ul>
			</header>
		);
}

export default Header;