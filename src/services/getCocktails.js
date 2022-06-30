import { API_URL} from './config';

export default async function getCocktails(keyword) {

	const fromApiResponse = apiResponse =>{
		const {drinks=[]} = apiResponse;
		if(Array.isArray(drinks)){
			return drinks
		}
		return []
	}

	return (
		fetch(API_URL+keyword)
			.then(res => res.json())
			.then(fromApiResponse) || []
	);
}
