import React from 'react';
import { Link } from '@chakra-ui/react';
import { useLocation } from 'wouter';

export default function IngredientLink({ ingredient }) {
	const [location, pushLocation] = useLocation();

	const searchIngredient = ingredient => {
		pushLocation(`/cocktails/${ingredient}`);
	};
	return (
		<Link
			m={1.5}
			onClick={e => searchIngredient(ingredient)}
			size='md'
			color='teal'>🍹
			{ingredient}
		</Link>
	);
}
