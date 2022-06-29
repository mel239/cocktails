import React from 'react';
import { Link } from 'wouter';
import { Center,Text } from '@chakra-ui/react';


export default function CocktailButton({ children, keyword, name }) {
	return (
		<Link key={keyword} to={`/${children}/${keyword}`}>
			<Center
				as='h1'
				h='40px'
				w={200}
				color='#d51e0b'
				className='button'
				_hover={{ bgGradient:'linear(to-r,#34685c,#ef7401,#d51e0b)',bgClip:'text',cursor:'pointer'}}>
			<Text fontSize='3xl'>{name}</Text>
			</Center>
		</Link>
	);
}
