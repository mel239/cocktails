import React from 'react';
import ListOfCocktails from 'components/ListOfCocktails';
import { useCocktails } from 'hooks/useCocktails';
import { API_SEARCH } from 'services/config';
import { Heading, Spinner } from '@chakra-ui/react';

export default function CocktailSearch({ params }) {
	const { keyword } = params;

	const { cocktails, loading } = useCocktails(API_SEARCH + keyword);

	return (
		<>
			{cocktails.length !== 0 ? (
				<Heading pt={20} fontSize={'3xl'} fontFamily={'body'} align='center'>
					{decodeURI(keyword)}
				</Heading>
			) : (
				<Heading pt={20} fontSize={'3xl'} fontFamily={'body'} align='center'>
					no results
				</Heading>
			)}
			{loading ? (
				<Spinner color='red.500' thickness='5px' size='xl' />
			) : (
				<ListOfCocktails cocktails={cocktails} />
			)}
		</>
	);
}
