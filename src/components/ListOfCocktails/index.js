import React from 'react';
import { Link } from 'wouter';

import { SimpleGrid, Heading, Center, Image } from '@chakra-ui/react';

export default function ListOfCocktails({ cocktails }) {
	return (
		<SimpleGrid columns={[2, null, 4]} spacing={8} p={5} mt={10}>
			{cocktails.map(cocktail => (
				<Center
					loading='lazy'
					key={cocktail.idDrink}
					display='flex'
					alignItems='baseline'>
					<Link to={`/cocktail/${cocktail.idDrink}`}>
						<Heading
							color='white'
							size='sm'
							bg='rgba(0,0,0,0.5)'
							p='0.15rem'
							textAlign='center'
							mt='5px'
							pos={'absolute'}
							w='6rem'
							>
							{cocktail.strDrink}
						</Heading>

						<Image
							boxShadow='lg'
							objectFit={'cover'}
							src={`${cocktail.strDrinkThumb}/preview`}
							alt={cocktail.strDrink}></Image>
					</Link>
				</Center>
			))}
		</SimpleGrid>
	);
}
