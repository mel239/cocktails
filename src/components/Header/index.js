import React from 'react';
import { Link } from 'wouter';
import { HStack, IconButton, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

import useUser from 'hooks/useUser'
import CocktailForm from 'components/CocktailForm';
import Sidebar from 'components/Sidebar';

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();
	const {isLogged,logout} = useUser();

	const handleClick = e =>{
		e.preventDefault();
		logout();
	}

	return (
		<HStack position={'fixed'} p={'0.25rem'} w={'100%'} justify='space-between'>
			<Sidebar />
			<CocktailForm />

			{isLogged ? (
				<Link to='#' onClick={ handleClick}>Log out</Link>
			) : (
				<Link to='/login'>Login</Link>
			)}

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
