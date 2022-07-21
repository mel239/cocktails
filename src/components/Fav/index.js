import React from 'react';
import { Tooltip } from '@chakra-ui/react'

export default function Fav({ id }) {
	const handleClick = () => {
		alert(id);
	};
	return (
		<button onClick={handleClick}>
			<span role='img' aria-label='Fav cocktaik'>
				<Tooltip label='Like this cocktail'>
                    ❤
                </Tooltip>
			</span>
		</button>
	);
}
