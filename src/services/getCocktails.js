import { API_URL} from './config';

export default async function getCocktails(keyword) {

	return (
		fetch(API_URL+keyword)
			.then(res => res.json())
			.then(res => res.drinks) || []
	);
}
