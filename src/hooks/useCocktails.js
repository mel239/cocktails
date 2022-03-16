import {useEffect,useState} from 'react'
import getCocktails from 'services/getCocktails'

export function useCocktails (keyword) {

    const [cocktails, setCocktails] = useState([]);
    const[loading,setLoading] = useState(false);

    useEffect(
        function () {
            setLoading(true);
            getCocktails(keyword).then(drink => {
                setCocktails(drink);
                setLoading(false);
            });             
        },
        [keyword]
    );
    
    return {loading,cocktails}
};