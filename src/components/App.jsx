import { useState } from 'react';

const App = () => {
	const handleClick = () => {
		alert("I'm a button!");
	};

	return <button onClick={handleClick}>Click me!</button>;
};


export default App;
