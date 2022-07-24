import React from 'react';

function About(props) {
	const { url, path } = useRouteMatch();
	return (
		<div className='about__content'>
			<ul className='about__list'>...</ul>
			...
		</div>
	);
}

export default About;
