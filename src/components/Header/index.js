import {
	HStack,
	Flex,
	IconButton,
	Image,
	useColorMode,
} from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'wouter';
import CocktailForm from 'components/CocktailForm';
import Sidebar from 'components/Sidebar';

import logo from 'assets/logo.png';

export default function Header() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<HStack
			position={'fixed'}
			align={'center'}
			p={'0.25rem'}
			w={'100%'}
			justify='space-between'>
			<Flex justify={'left'} align={'self-end'}>
				<Link to={`/`}>
					<Image src={logo} alt={'logo'} cursor='pointer' />
				</Link>
			</Flex>

			<CocktailForm />
			<Flex justify={'right'} gap={'2rem'}>
				<IconButton
					icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
					isRound='true'
					size='sm'
					colorScheme='red'
					onClick={toggleColorMode}
				/>
				<Sidebar />
			</Flex>
		</HStack>
	);
}
