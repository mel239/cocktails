import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { Flex, Button, Text } from '@chakra-ui/react';

import { useLocalStorage } from 'hooks/useLocalStorage';

export default function Login() {
	const [user, setUser] = useLocalStorage('is-logged', false);

	const onSuccess = googleData => {
		var userObj = jwt_decode(googleData.credential);
		setUser(userObj);
	};

	const onError = res => {
		console.log('[Login failed] res:', res);
	};

	const handleLogout = res => {
		setUser(null);
		alert('adios✌');
	};

	return (
		<div>
			{user ? (
				<Flex direction='row'>
					<img
						style={{ width: '50px', borderRadius: '50%' }}
						src={user.picture}
						alt='profile'
						referrerPolicy='no-referrer'
					/>
					<Flex direction='column' pl={5}>
						<Text fontSize='md'>{user.name}</Text>

						<Button onClick={handleLogout} size='sm' colorScheme='red'>
							Log out
						</Button>
					</Flex>
				</Flex>
			) : (
				<GoogleLogin onSuccess={onSuccess} onError={onError} />
			)}
		</div>
	);
}
