import React from 'react';
import { Link } from 'wouter';

import { SimpleGrid, Heading, Center, Image } from '@chakra-ui/react';

export default function ListOfCocktails({ cocktails }) {
	return (
		<SimpleGrid columns={[2, null, 4]} spacing={5} p={5} mt={10}>
			{cocktails.map(cocktail => (
				<Center
					loading='lazy'
					key={cocktail.idDrink}
					display='flex'
					alignItems='baseline'>
					<Link to={`/cocktail/${cocktail.idDrink}`}>
						<Heading color='#34685c' as='h2' size='md' textAlign='center'>
							{cocktail.strDrink}
						</Heading>

						<Image
							boxShadow='lg'
							rounded={'lg'}
							objectFit={'cover'}
							src={`${cocktail.strDrinkThumb}/preview`}
							alt={cocktail.strDrink}></Image>
					</Link>
				</Center>
			))}
		</SimpleGrid>
	);
}
