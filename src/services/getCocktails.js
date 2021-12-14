

export default async function getCocktails(keyword) {
	const apiURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`;

	return (fetch(apiURL)
		.then(res => res.json())
		.then(res => res.drinks)
         || [])

}

