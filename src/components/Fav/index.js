import React from 'react';

export default function Fav({ id }) {
	const handleClick = () => {
        alert(id);
    };
	return (
		<button onclick={handleClick}>
			<span role='img' aria-label='Fav cocktaik'>
				❤
			</span>
		</button>
	);
}
