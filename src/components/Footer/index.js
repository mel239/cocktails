import { Flex, Text } from '@chakra-ui/react';

export default function Footer() {
	return (
		<Flex
			pos='absolute'
			bottom='0'
			justify={'center'}
			w='100%'
			bgGradient='linear(to-t,red.300,orange.200)'>
			<Text fontSize='sm'>made with love by mel🍉</Text>
		</Flex>
	);
}
