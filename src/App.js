import React from 'react';
import { Route, Switch } from 'wouter';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import Header from 'components/Header';

import Cocktails from 'pages/Cocktails';
import CocktailDetails from 'pages/CocktailDetails';
import CocktailSearch from 'pages/CocktailSearch';
import CocktailCategory from 'pages/CocktailCategory';
import ErrorPage from 'pages/ErrorPage';
import Home from 'pages/Home';
import Login from 'pages/Login'

import  {UserContextProvider} from 'context/UserContext';


function App() {
	return (
		<ChakraProvider>
			<UserContextProvider>
			<ColorModeScript initialColorMode='light' />
			<Header />
			<Switch>
				<Route component={Home} path='/' />
				<Route component={Cocktails} path='/cocktails/:keyword' />
				<Route component={CocktailSearch} path='/search/:keyword' />
				<Route component={CocktailCategory} path='/category/:keyword'/>
				<Route component={CocktailDetails} path='/cocktail/:id' />
				<Route component={Login} path='/login'/>
				<Route component={ErrorPage} path='/:rest*' />
			</Switch>
			</UserContextProvider>
		</ChakraProvider>
		
	);
}
export default App;
