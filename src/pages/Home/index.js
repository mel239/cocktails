import React from 'react';
import CocktailButton from 'components/CocktailButton';
import './home.css';
import { FaAngleDown } from 'react-icons/fa';
import {
	Image,
	Heading,
	Button,
	Text,
	Flex,
	Stack,
	Menu,
	MenuButton,
	MenuList,
} from '@chakra-ui/react';

export default function Home() {
	return (
		<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
			<Flex justify='center'>
				<Image src={'cocktail.png'} objectFit={'contain'} mt='3.5rem' />
			</Flex>
			<Flex mt='3.5rem' align={'center'} w={{base:'100%',md:'70%'}} justify={'center'} p={{ md: '3rem' }}>
				<Stack>
					<Heading className='bg-animation' as='h1' size='3xl' align='center'>
						DON'T LOSE YOUR HEAD, USE IT!
					</Heading>
					<Text align='center' fontSize='2xl' color='#34685c'>
						An easy guide to Cocktails
					</Text>
					<Stack
						direcction={{ base: 'column', md: 'row' }}
						pt={5}
						spacing={3}
						align={'center'}
						justify={'center'}>
						<Menu matchWidth='true'>
							<MenuButton
								as={Button}
								colorScheme='red'
								rightIcon={<FaAngleDown />}>
								<Heading as='h1' size='lg' color='white'>
									Pick your POISON
								</Heading>
							</MenuButton>
							<MenuList align='center'>
								<CocktailButton
									children='cocktails'
									keyword='gin'
									name='Gin'></CocktailButton>
								<CocktailButton
									children='cocktails'
									keyword='vodka'
									name='Vodka'></CocktailButton>
								<CocktailButton
									children='cocktails'
									keyword='rum'
									name='Rum'></CocktailButton>
								<CocktailButton
									children='cocktails'
									keyword='tequila'
									name='Tequila'></CocktailButton>
							</MenuList>
						</Menu>
					</Stack>
				</Stack>
			</Flex>
		</Stack>
	);
}
