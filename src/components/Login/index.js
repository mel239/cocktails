import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';


export default function Login() {
	const [user, setUser] = useState({});

	const onSuccess = googleData => {
		var userObj = jwt_decode(googleData.credential);
        console.log(userObj)
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
				<div>
					<h4>Logged in as {user.name}</h4>
					<button onClick={handleLogout}>Log out</button>
				</div>
			) : (
				<GoogleLogin onSuccess={onSuccess} onError={onError} />
			)}
		</div>
	);
}
