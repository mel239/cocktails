import React from 'react';
import {
	IconButton,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import CocktailButton from 'components/CocktailButton';
import Login from 'components/Login';

export default function Sidebar() {
	return (
		<>
			<Menu>
				<MenuButton
					as={IconButton}
					aria-label='Options'
					icon={<FaBars />}
					colorScheme={'red'}
				/>
				<MenuList>
					<MenuItem>
						<Login />
					</MenuItem>

					<MenuItem>
						<CocktailButton path={'cocktails'} keyword={'gin'} name={'Gin'} />
					</MenuItem>
					<MenuItem>
						<CocktailButton
							path='category'
							keyword='Cocktail'
							name='Cocktails'
						/>
					</MenuItem>
					<MenuItem>
						<CocktailButton
							path='category'
							keyword='Ordinary Drink'
							name='Ordinary Drinks'
						/>
					</MenuItem>
				</MenuList>
			</Menu>
		</>
	);
}
