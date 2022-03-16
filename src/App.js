import Cocktails from 'pages/Cocktails';
import CocktailDetails from 'pages/CocktailDetails';
import CocktailSearch from 'pages/CocktailSearch'
import Header from 'components/Header';
import Home from 'pages/Home';
import { Route } from 'wouter';
import { ChakraProvider,ColorModeScript} from '@chakra-ui/react'


function App() {
	return (
		<ChakraProvider>
			<ColorModeScript initialColorMode='light'/>
				<Header/>
				<Route component={Home} path='/' />
				<Route component={Cocktails} path='/cocktails/:keyword' />
				<Route component={CocktailDetails} path='/cocktail/:id' />
				<Route component={CocktailSearch} path='/search/:keyword'/>	
		</ChakraProvider>
	);
}
export default App;
