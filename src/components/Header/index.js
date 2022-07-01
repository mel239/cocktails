import React from 'react';
import CocktailForm from 'components/CocktailForm';
import Sidebar from 'components/Sidebar';
import { HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<HStack
			position={'fixed'}
			p={'1rem'}
			w={'100%'}
			spacing={'1rem'}
			justify='space-between'>
				<Sidebar/>

			<CocktailForm/>
			
			<IconButton
				icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
				isRound='true'
				size='lg'
				colorScheme='red'
				onClick={toggleColorMode}
			/>
		</HStack>
	);
}
