import React from 'react';
import CocktailButton from 'components/CocktailButton';
import './home.css';
import { Image, Heading, Text, Flex, Stack } from '@chakra-ui/react';

import home from 'assets/home.png';

export default function Home() {
	return (
		<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
			<Flex justify='center'>
				<Image src={home} objectFit={'contain'} mt='3.5rem' />
			</Flex>
			<Flex
				mt='3.5rem'
				align={'center'}
				w={{ base: '100%', md: '70%' }}
				justify={'center'}
				p={{ md: '3rem' }}>
				<Stack align={'center'}>
					<Heading className='bg-animation' as='h1' size='3xl' align='center'>
						DON'T LOSE YOUR HEAD, USE IT!
					</Heading>
					<Text align='center' as={'h3'} fontSize='2xl' color='teal'>
						An easy guide to Cocktails
					</Text>
					<CocktailButton name={'Random cocktail🍹'} />
				</Stack>
			</Flex>
		</Stack>
	);
}
