import React from 'react';
import {
	Center,
	useColorModeValue,
	Heading,
	Text,
	Stack,
	Flex,
	Image,
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
				maxW={{base:'330px',md:'600px'}}
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
					<Flex wrap='wrap' align='center' justify='center'>
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
						{cocktail.strIngredient6 && (
							<IngredientLink ingredient={cocktail.strIngredient6} />
						)}
					</Flex>
				</Stack>

				<Text fontSize='lg' align='center' border='1px' mt='1rem' p='0.25rem'>
					{cocktail.strInstructions}
				</Text>
			</Center>
		</Center>
	);
}
