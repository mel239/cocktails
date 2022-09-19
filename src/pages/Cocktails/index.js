import React from 'react';
import ListOfCocktails from 'components/ListOfCocktails';
import { useCocktails } from 'hooks/useCocktails';
import { API_FILTER_BY_INGREDIENT } from 'services/config';
import { Heading, Spinner } from '@chakra-ui/react';

export default function Cocktails({ params }) {
	const { keyword } = params;

	const { cocktails, loading } = useCocktails(
		API_FILTER_BY_INGREDIENT + keyword
	);

	return (
		<>
			<Heading
				pt={20}
				fontSize={'3xl'}
				as='h1'
				fontFamily={'body'}
				align='center'>
				Cocktails with {decodeURI(keyword)}
			</Heading>
			{loading ? (
				<Spinner color='red.500' thickness='5px' size='xl' />
			) : (
				<ListOfCocktails cocktails={cocktails} />
			)}
		</>
	);
}
