import React, { useState } from 'react';
import { useLocation } from 'wouter';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

export default function CocktailForm() {
	const [cocktail, setCocktail] = useState([]);
	const [, pushLocation] = useLocation();

	const handleSubmit = event => {
		event.preventDefault();
		if (cocktail !== '') {
			pushLocation(`/search/${cocktail}`);
		}
		setCocktail('');
	};
	const handleChange = event => {
		setCocktail(event.target.value);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<InputGroup>
					<InputLeftElement
						pointerEvents='none'
						children={<FaSearch color='#d51e0b' />}
					/>
					<Input
						onChange={handleChange}
						size='md'
						type='text'
						value={cocktail}
						isInvalid
						focusBorderColor='#d51e0b'
						width='100%'
						autoComplete='on'
						placeholder='Search cocktail . . .'
					/>
				</InputGroup>
			</form>
		</>
	);
}
