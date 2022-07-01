import React from 'react';
import { Center, Image, Flex, Heading } from '@chakra-ui/react';

export default function ErrorPage() {
	return (
		<Center>
			<Flex mt='5rem' direction='column' align='center'>
				<Image src='404.png' />
				<Heading as='h1'>404 ERROR</Heading>
			</Flex>
		</Center>
	);
}
