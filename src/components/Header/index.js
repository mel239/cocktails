import React from 'react';
import CocktailForm from 'components/CocktailForm';
import { HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'wouter';

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<HStack
			position={'fixed'}
			p={'1rem'}
			w={'100%'}
			spacing={'1rem'}
			justify='space-between'>
			<Link to={`/`}>
				{' '}
				<img src={'logo.png'} alt={'logo'} />
			</Link>
			<CocktailForm />
			<IconButton
				icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
				isRound='true'
				size='lg'
				onClick={toggleColorMode}
			/>
		</HStack>
	);
}
