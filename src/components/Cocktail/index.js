import React from 'react';
import {
	Center,
	Box,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Flex,
	Image,
	List,
	ListItem,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
} from '@chakra-ui/react';

import linedeco from 'assets/line-deco.png';
import Fav from 'components/Fav';
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

				<Flex justify='center'>
					<Image src={linedeco} objectFit={'contain'} w={{ md: '80%' }} />
				</Flex>
				<Fav id={cocktail.idDrink} />

				{/*Accordion*/}

				<Box w='80%'>
					<Accordion allowMultiple size='xl'>
						<AccordionItem>
							<h3>
								<AccordionButton>
									<Box flex='1' textAlign='left'>
										Ingredients
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h3>
							<AccordionPanel pb={4}>
								<List>
									{cocktail.strIngredient1 && (
										<ListItem>
											▪ {cocktail.strMeasure1} {cocktail.strIngredient1}
										</ListItem>
									)}
									{cocktail.strIngredient2 && (
										<ListItem>
											▪ {cocktail.strMeasure2} {cocktail.strIngredient2}
										</ListItem>
									)}
									{cocktail.strIngredient3 && (
										<ListItem>
											▪ {cocktail.strMeasure3} {cocktail.strIngredient3}
										</ListItem>
									)}
									{cocktail.strIngredient4 && (
										<ListItem>
											▪ {cocktail.strMeasure4} {cocktail.strIngredient4}
										</ListItem>
									)}
									{cocktail.strIngredient5 && (
										<ListItem>
											▪ {cocktail.strMeasure1} {cocktail.strIngredient5}
										</ListItem>
									)}
									{cocktail.strIngredient6 && (
										<ListItem>
											▪ {cocktail.strMeasure6} {cocktail.strIngredient6}
										</ListItem>
									)}
									{cocktail.strIngredient7 && (
										<ListItem>
											▪ {cocktail.strMeasure7} {cocktail.strIngredient7}
										</ListItem>
									)}
									{cocktail.strIngredient8 && (
										<ListItem>
											▪ {cocktail.strMeasure8} {cocktail.strIngredient8}
										</ListItem>
									)}
								</List>
							</AccordionPanel>
						</AccordionItem>

						<AccordionItem>
							<h3>
								<AccordionButton>
									<Box flex='1' textAlign='left'>
										Instructions
									</Box>
									<AccordionIcon />
								</AccordionButton>
							</h3>
							<AccordionPanel pb={4}>
								<Text>{cocktail.strInstructions}</Text>
							</AccordionPanel>
						</AccordionItem>
					</Accordion>
				</Box>

				<Flex wrap='wrap' align='center' justify='center' mt='1rem'>
					<h3>See more cocktails with:</h3>

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
