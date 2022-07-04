import React from 'react';
import {
	Flex,
	Image,
	Drawer,
	DrawerHeader,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
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

export default function Sidebar() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	return (
		<>
			<Image
				ref={btnRef}
				onClick={onOpen}
				src={'logo.png'}
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
					<DrawerHeader>Login|Register</DrawerHeader>
					<DrawerCloseButton colorScheme='red' />

					<DrawerBody mt='3rem'>
						<Flex direction='column'>
							<Link to={`/`}>
								{' '}
								<Button w='100%' onClick={onClose} colorScheme='red'>
									Home
								</Button>
							</Link>

							<Menu>
								<MenuButton
									as={Button}
									colorScheme='red'
									rightIcon={<FaAngleDown />}
									mt='1rem'>
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
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
