import React, { useState } from 'react';
import { useLocation } from 'wouter';
import {Input } from '@chakra-ui/react'


export default function CocktailForm() {

    const [cocktail,setCocktail] = useState([]);
    const [location,pushLocation] = useLocation();

    const handleSubmit = event => {
        event.preventDefault();
        pushLocation(`/search/${cocktail}`);
    };
    const handleChange = event => {
        setCocktail(event.target.value);
    };

   return(
       <>
	<form onSubmit={handleSubmit}>
		<Input
			onChange={handleChange}
			type='text'
			value={cocktail}
            isInvalid
            focusBorderColor="#d51e0b"
            width='100%'
			placeholder='Search cocktail here...'
            ></Input>
	</form>
    </>
    )
}
