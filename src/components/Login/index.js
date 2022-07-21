import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { Flex,Button } from '@chakra-ui/react';

import { useLocalStorage } from 'hooks/useLocalStorage';

export default function Login() {
	const [user, setUser] = useLocalStorage('is-logged', false);

	const onSuccess = googleData => {
		var userObj = jwt_decode(googleData.credential);
		console.log(userObj);
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
				<Flex>
					<img
						style={{ width: '40px', borderRadius: '50%' }}
						src={user.picture}
						alt='profile'
						referrerPolicy='no-referrer'
					/>
					<ul>
						<li>{user.name}</li>
						<li>
							<Button onClick={handleLogout} size='sm' colorScheme='red'>Log out</Button>
						</li>
					</ul>
				</Flex>
			) : (
				<GoogleLogin onSuccess={onSuccess} onError={onError} />
			)}
		</div>
	);
}
