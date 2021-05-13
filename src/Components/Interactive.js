import React from 'react';
import interactiveImg from '../Images/mobile/image-interactive.jpg';
function Interactive() {
	return (
		<>
			<section className='interactive'>
				<div>
					<img src={interactiveImg} alt='InteractiveImage' />
				</div>
				<div className='interactive-words'>
					<h2>The leader in interactive VR</h2>
					<p>
						Founded in 2011, Loopstudios has been producing world-class virtual
						reality projects for some of the best companies around the globe.
						Our award-winning creation have transformed businesses through
						digital experiences that bind to their brand.
					</p>
				</div>
			</section>
		</>
	);
}

export default Interactive;
