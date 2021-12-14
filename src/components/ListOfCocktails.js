import React, { useEffect, useState } from 'react';
import getCocktails from '../services/getCocktails';
import Cocktail from './Cocktail';

export default function ListOfCocktails({ params }) {
	const { keyword } = params;

	/////CUSTOM HOOK////////////////////////////////////////////////////
	const useFetchingCocktail = keyword => {
		const [newCocktail, setCocktail] = useState([]);
		const[loading,setLoading] = useState(false);
        
        useEffect(
			function () {
                setLoading(true);
				getCocktails(keyword).then(drink => {
					setCocktail(drink);
                    setLoading(false);
				});             
			},
			[keyword]
		);
        
        return {newCocktail,loading}
	};
	///////////////////////////////////////////////////////////////////////

    const {newCocktail,loading} = useFetchingCocktail(`filter.php?i=${keyword}`);
    if (loading) return <i>loading 🍸🍸🍸</i>

	console.log(newCocktail)

	return (
		<div className='Cocktail'>
			{newCocktail.map(cocktail => (
				<Cocktail key={cocktail.idDrink} cocktail={cocktail} />
			))}
		</div>
	);
}
