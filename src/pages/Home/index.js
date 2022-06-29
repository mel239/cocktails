import React from 'react';
import CocktailButton from 'components/CocktailButton';
import './home.css';

import {
	Image,
	Heading,
	Text,
	Flex,
	Stack,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionPanel,
	AccordionIcon,
} from '@chakra-ui/react';

export default function Home() {
	return (
		<Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
			<Flex flex={2} >
				<Image src={'cocktail.png'} objectFit={'cover'} mt='3.5rem' p='1rem' />
			</Flex>
			<Flex mt={10} flex={1} align={'center'} justify={'center'}>
				<Stack w={'full'} mt='3.5rem'>
					<Heading className='bg-animation' as='h1' size='4xl' align='center'>
						DON'T LOSE YOUR HEAD, USE IT!
					</Heading>
					<Text align='center' fontSize='2xl' color='#34685c'>
						An easy Cocktails recipe guide
					</Text>
					<Stack
						direcction={{ base: 'column', md: 'row' }}
						pt={5}
						spacing={3}
						align={'center'}
						justify={'center'}>
						<Accordion allowMultiple>
							<AccordionItem>
								<AccordionButton>
									<Heading as='h3' size='lg' color='#34685c'>
										Pick your{' '}
										<Text
											bgGradient='linear(to-r,#34685c,#ef7401,#d51e0b)'
											bgClip='text'
											display='inline'
											as='h1'
											>
											Poison
										</Text>
									</Heading>
									<AccordionIcon />
								</AccordionButton>
								<AccordionPanel>
									<CocktailButton
										children='cocktails'
										keyword='gin'
										name='Gin'></CocktailButton>
									<CocktailButton
										children='cocktails'
										keyword='vodka'
										name='Vodka'></CocktailButton>
									<CocktailButton
										children='cocktails'
										keyword='rum'
										name='Rum'></CocktailButton>
									<CocktailButton
										children='cocktails'
										keyword='tequila'
										name='Tequila'></CocktailButton>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</Stack>
				</Stack>
			</Flex>
		</Stack>
	);
}
