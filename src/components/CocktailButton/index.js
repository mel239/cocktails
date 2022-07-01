import React from 'react';
import { Link } from 'wouter';
import { Center,Text } from '@chakra-ui/react';


export default function CocktailButton({ children, keyword, name }) {
	console.log(keyword)
	return (
		<Link key={keyword} to={`/${children}/${keyword}`}>
			<Center
				as='h3'
				h='40px'
				w='250px'
				color='#d51e0b'
				className='button'
				_hover={{cursor:'pointer',color:'orange'}}>
			<Text fontSize='3xl'>{name}</Text>
			</Center>
		</Link>
	);
}
