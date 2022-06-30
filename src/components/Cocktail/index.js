import React from 'react';
import {
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Flex,
	Image,
	List,
	ListItem,
} from '@chakra-ui/react';
import IngredientLink from 'components/IngredientLink';

export default function Cocktail({ cocktail }) {
	return (
		<Center pt={20}>
			<Center
				mt={20}
				display='flex'
				flexDir='column'
				role={'group'}
				p={6}
				maxW={{ base: '330px', md: '600px' }}
				w={'full'}
				bg={useColorModeValue('white', '#f77d44')}
				boxShadow={'2xl'}
				pos={'relative'}
				zIndex={1}>
				<Center mt={-20} pos={'relative'}>
					<Image
						objectFit={'cover'}
						src={`${cocktail.strDrinkThumb}/preview`}
					/>
				</Center>
				<Stack pt={10} align={'center'}>
					<Text color={'gray.500'} fontSize={'md'} textTransform={'uppercase'}>
						{cocktail.strCategory}
					</Text>
					<Heading
						fontSize={'4xl'}
						align='center'
						fontFamily={'body'}
						textTransform={'uppercase'}
						fontWeight={500}
						as='h1'>
						{cocktail.strDrink}
					</Heading>
				</Stack>

				<List
					align='center'
					borderBottom='1px'
					fontSize='lg'
					borderTop='1px'
					mt='1rem'
					p='0.5rem'>
					{cocktail.strMeasure1 && (
						<ListItem>
							▪ {cocktail.strMeasure1} {cocktail.strIngredient1}
						</ListItem>
					)}
					{cocktail.strMeasure2 && (
						<ListItem>
							▪ {cocktail.strMeasure2} {cocktail.strIngredient2}
						</ListItem>
					)}
					{cocktail.strMeasure3 && (
						<ListItem>
							▪ {cocktail.strMeasure3} {cocktail.strIngredient3}
						</ListItem>
					)}
					{cocktail.strMeasure4 && (
						<ListItem>
							▪ {cocktail.strMeasure4} {cocktail.strIngredient4}
						</ListItem>
					)}
					{cocktail.strMeasure5 && (
						<ListItem>
							▪ {cocktail.strMeasure1} {cocktail.strIngredient5}
						</ListItem>
					)}
					{cocktail.strMeasure6 && (
						<ListItem>
							▪ {cocktail.strMeasure6} {cocktail.strIngredient6}
						</ListItem>
					)}
					{cocktail.strMeasure7 && (
						<ListItem>
							▪ {cocktail.strMeasure7} {cocktail.strIngredient7}
						</ListItem>
					)}
					{cocktail.strMeasure8 && (
						<ListItem>
							▪ {cocktail.strMeasure8} {cocktail.strIngredient8}
						</ListItem>
					)}
				</List>
				<Text mt='1rem'>{cocktail.strInstructions}</Text>

				<Flex wrap='wrap' align='center' justify='center' mt='1.5rem'>
					See more cocktails with:
					{cocktail.strIngredient1 && (
						<IngredientLink ingredient={cocktail.strIngredient1} />
					)}
					{cocktail.strIngredient2 && (
						<IngredientLink ingredient={cocktail.strIngredient2} />
					)}
					{cocktail.strIngredient3 && (
						<IngredientLink ingredient={cocktail.strIngredient3} />
					)}
					{cocktail.strIngredient4 && (
						<IngredientLink ingredient={cocktail.strIngredient4} />
					)}
					{cocktail.strIngredient5 && (
						<IngredientLink ingredient={cocktail.strIngredient5} />
					)}
				</Flex>
			</Center>
		</Center>
	);
}
