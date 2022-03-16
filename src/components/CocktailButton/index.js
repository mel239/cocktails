import React from 'react';
import { Link } from 'wouter';
import { Center,Text } from '@chakra-ui/react';


export default function CocktailButton({ children, keyword, name }) {
	return (
		<Link key={keyword} to={`/${children}/${keyword}`}>
			<Center
				borderRadius='15'
				mt={100}
				bg='#d51e0b'
				h='40px'
				w={200}
				color='white'
				className='button'
				_hover={{ shadow: '3px 3px #d51e0b', bg: '#ef7401',cursor:'pointer'}}>
			<Text fontSize='3xl'>{name}</Text>
			</Center>
		</Link>
	);
}
