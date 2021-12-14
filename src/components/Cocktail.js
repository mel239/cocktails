import React from 'react';

export default function Cocktail({ cocktail }) {
	return (
		<div>
			<h2>{cocktail.strDrink}</h2>
			<div>
				<img
					src={`${cocktail.strDrinkThumb}/preview`}
					alt={cocktail.strDrink}></img>
				<ul>
					<li>{cocktail.strIngredient1}</li>
					<li>{cocktail.strIngredient2}</li>
					<li>{cocktail.strIngredient3}</li>
					<li>{cocktail.strIngredient4}</li>
					<li>{cocktail.strIngredient5}</li>
					<li>{cocktail.strIngredient6}</li>
				</ul>
			</div>
		</div>
	);
}
