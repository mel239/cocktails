import React, { useEffect, useState } from 'react';
import { Flex, Center } from '@chakra-ui/react';
import { useLocation } from 'wouter';

import useUser from 'hooks/useUser';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [, navigate] = useLocation();
    const {login,isLogged} = useUser();

    useEffect(()=>{
        if(isLogged) navigate('/');
    },[isLogged,navigate])

    console.log(isLogged)

	const handleSubmit = e => {
		e.preventDefault();
		login()
	};
	return (
		<Center>
			<Flex mt='5rem' direction='column' align='center'>
				<form onSubmit={handleSubmit}>
					<input
						placeholder='username'
						onChange={e => setUsername(e.target.value)}
						value={username}
					/>
					<input
						type='password'
						placeholder='password'
						onChange={e => setPassword(e.target.value)}
						value={password}
					/>
					<button>Login</button>
				</form>
			</Flex>
		</Center>
	);
}
