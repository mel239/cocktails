import React from 'react';
import { Link } from 'wouter';
import { Center,Text } from '@chakra-ui/react';


export default function CocktailButton({ children, keyword, name }) {
	return (
		<Link key={keyword} to={`/${children}/${keyword}`}>
			<Center
				borderRadius='15'
				mt={'2rem'}
				h='40px'
				w={200}
				color='#d51e0b'
				className='button'
				_hover={{ color: '#ef7401',cursor:'pointer'}}>
			<Text fontSize='3xl'>{name}</Text>
			</Center>
		</Link>
	);
}
