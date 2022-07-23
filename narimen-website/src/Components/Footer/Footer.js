import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { GitHub } from '@mui/icons-material';
import { AccountCircle } from '@mui/icons-material';
import style from './Footer.css';
import { color } from '@mui/system';
function Footer(props) {
	return (
		<div>
			<footer>
				<ul className='footer-list'>
					<a href='https://www.linkedin.com/in/narimen-mokrani-bb5a7a13b/'>
						<LinkedInIcon
							className='icon'
							style={{ fontSize: 60, color: 'black' }}
						/>
					</a>
					<a href='https://github.com/narimenmokrani1'>
						<GitHub style={{ fontSize: 60, color: 'black' }} />
					</a>
					<a href='https://narimen-mokrani-portfolio.netlify.app/'>
						<AccountCircle style={{ fontSize: 60, color: 'black' }} />
					</a>
					<li className='footer'>Rimel's Food &copy; 2022</li>
				</ul>
			</footer>
		</div>
	);
}

export default Footer;
