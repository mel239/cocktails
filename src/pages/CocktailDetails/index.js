import React from 'react';
import Cocktail from 'components/Cocktail';
import { useCocktails} from 'hooks/useCocktails';
import { Spinner } from '@chakra-ui/react'
import {API_COCKTAIL_ID} from 'services/config';

export default function CocktailDetails({ params }) {
	const { id } = params;

	const { cocktails, loading } = useCocktails(API_COCKTAIL_ID+id);

	return (
		<div>
			{loading
				? <Spinner color='red.500'thickness='5px'size='xl' />
				: cocktails.map(cocktail => <Cocktail cocktail={cocktail} key={cocktail.idDrink}/>)}
		</div>
	);
}
