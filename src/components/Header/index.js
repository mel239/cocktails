import React from 'react';
import { HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

import CocktailForm from 'components/CocktailForm';
import Sidebar from 'components/Sidebar';
import Login from 'components/Login';


export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<HStack position={'fixed'} p={'0.25rem'} w={'100%'} justify='space-between'>
			<Sidebar />
			<CocktailForm />
			<Login/>
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
