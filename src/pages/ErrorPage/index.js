import React from 'react';
import { Center, Image, Flex, Heading } from '@chakra-ui/react';

import error from 'assets/404.png'

export default function ErrorPage() {
	return (
		<Center>
			<Flex mt='5rem' direction='column' align='center'>
				<Image src={error} />
				<Heading as='h1'>404 ERROR</Heading>
			</Flex>
		</Center>
	);
}
