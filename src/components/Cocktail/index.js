import React from 'react';
import {
	Button,
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Image,
	List,
	ListItem,
} from '@chakra-ui/react';
import { useLocation } from 'wouter';

export default function Cocktail({ cocktail }) {
	const [location, pushLocation] = useLocation();

	const searchIngredient = ingredient => {
		pushLocation(`/cocktails/${ingredient}`);
	};

	return (
		<Center pt={20}>
			<Center
				mt={10}
				display='flex'
				flexDir='column'
				role={'group'}
				p={6}
				maxW={'330px'}
				w={'full'}
				bg={useColorModeValue('white', '#f77d44')}
				boxShadow={'2xl'}
				rounded={'lg'}
				pos={'relative'}
				zIndex={1}>
				<Center rounded={'lg'} mt={-12} pos={'relative'}>
					<Image
						rounded={'lg'}
						objectFit={'cover'}
						src={`${cocktail.strDrinkThumb}/preview`}
					/>
				</Center>
				<Stack pt={10} align={'center'}>
					<Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
						{cocktail.strCategory}
					</Text>
					<Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
						{cocktail.strDrink}
					</Heading>
					<Stack direction={'row'} align={'center'}>
						<List spacing={5}>

						
													
							<ListItem>
								{cocktail.strIngredient1 && (
									<Button
										m={1.5}
										onClick={e => searchIngredient(cocktail.strIngredient1)}
										size='sm'
										colorScheme='teal'>
										{cocktail.strIngredient1}
									</Button>
								)}
								{cocktail.strIngredient2 && (
									<Button
										m={1.5}
										onClick={e => searchIngredient(cocktail.strIngredient2)}
										size='sm'
										colorScheme='teal'>
										{cocktail.strIngredient2}
									</Button>
								)}
								{cocktail.strIngredient3 && (
									<Button
										m={1.5}
										onClick={e => searchIngredient(cocktail.strIngredient3)}
										size='sm'
										colorScheme='teal'>
										{cocktail.strIngredient3}
									</Button>
								)}
								{cocktail.strIngredient4 && (
									<Button
										m={1.5}
										onClick={e => searchIngredient(cocktail.strIngredient4)}
										size='sm'
										colorScheme='teal'>
										{cocktail.strIngredient4}
									</Button>
								)}
								{cocktail.strIngredient5 && (
									<Button
										m={1.5}
										onClick={e => searchIngredient(cocktail.strIngredient5)}
										size='sm'
										colorScheme='teal'>
										{cocktail.strIngredient5}
									</Button>
								)}
							</ListItem>
						</List>
					</Stack>
				</Stack>

				<p>{cocktail.strInstructions}</p>
			</Center>
		</Center>
	);
}
