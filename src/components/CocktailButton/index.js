import React from 'react';
import { Link } from 'wouter';
import { Text } from '@chakra-ui/react';

export default function CocktailButton({ path, keyword, name }) {
	return (
		<Text
			as='h3'
			fontSize='xl'
			color='red.500'
			_hover={{
				cursor: 'pointer',
				color: 'orange.300',
			}}>
			<Link key={keyword} to={`/${path}/${keyword}`}>
				{name}
			</Link>
		</Text>
	);
}
