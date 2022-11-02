import React from 'react';
import { Link } from 'wouter';

import { SimpleGrid, Heading, Center, Stack, Image } from '@chakra-ui/react';

export default function ListOfCocktails({ cocktails }) {
	return (
		<Stack minH={'100vh'} pb={5}>
			<SimpleGrid columns={[2, null, 4]} spacing={8} p={5} mt={10}>
				{cocktails.map(cocktail => (
					<Center
						key={cocktail.idDrink}
						display='flex'
						alignItems='baseline'
						loading={'lazy'}>
						<Link to={`/cocktail/${cocktail.idDrink}`}>
							<Heading
								color='white'
								size='sm'
								bg='rgba(0,0,0,0.5)'
								p='0.15rem'
								textAlign='center'
								mt='5px'
								pos={'absolute'}
								w='6rem'>
								{cocktail.strDrink}
							</Heading>

							<Image
								loading={'lazy'}
								boxShadow='lg'
								objectFit={'cover'}
								borderRadius='15'
								src={`${cocktail.strDrinkThumb}/preview`}
								alt={cocktail.strDrink}
							/>
						</Link>
					</Center>
				))}
			</SimpleGrid>
		</Stack>
	);
}
