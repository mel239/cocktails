import React from 'react';
import {
	Flex,
	Image,
	Drawer,
	DrawerHeader,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	Button,
	useDisclosure,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';
import CocktailButton from 'components/CocktailButton';
import { Link } from 'wouter';
import { FaAngleDown } from 'react-icons/fa';

import logo from 'assets/logo.png';

export default function Sidebar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	return (
		<>
			<Image
				ref={btnRef}
				onClick={onOpen}
				src={logo}
				alt={'logo'}
				cursor='pointer'
			/>
			<Drawer
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
				finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader >
					<Flex justify="center">
					<Image
							onClick={onClose}
							src={logo}
							alt={'logo'}
							cursor='pointer'
						/>
					</Flex>
					</DrawerHeader>
				
					<DrawerBody mt='1rem'>
						<Flex direction='column' gap='1rem'>
							<Link to={`/`}>
								{' '}
								<Button w='100%' onClick={onClose} colorScheme='red'>
									Home
								</Button>
							</Link>

							<Menu matchWidth='true'>
								<MenuButton
									as={Button}
									colorScheme='red'
									rightIcon={<FaAngleDown />}>
									Categories
								</MenuButton>
								<MenuList colorScheme='red'>
									<MenuItem onClick={onClose}>
										<CocktailButton
											children='category'
											keyword='Cocktail'
											name='Cocktail'></CocktailButton>
									</MenuItem>
									<MenuItem onClick={onClose}>
										<CocktailButton
											children='category'
											keyword='Ordinary Drink'
											name='Ordinary Drink'></CocktailButton>
									</MenuItem>
									<MenuItem onClick={onClose}>
										{' '}
										<CocktailButton
											children='category'
											keyword='Shot'
											name='Shot'></CocktailButton>
									</MenuItem>
									<MenuItem onClick={onClose}>
										<CocktailButton
											children='category'
											keyword='Soft Drink'
											name='Soft Drink'></CocktailButton>
									</MenuItem>{' '}
									<MenuItem onClick={onClose}>
										{' '}
										<CocktailButton
											children='category'
											keyword='Shake'
											name='Shake'></CocktailButton>
									</MenuItem>
								</MenuList>
							</Menu>

							<Link to={`/`}>
								{' '}
								<Button w='100%' onClick={onClose} colorScheme='red'>
									Favorites
								</Button>
							</Link>
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
