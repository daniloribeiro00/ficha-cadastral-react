import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppContext } from './contexts/AppContext';

ReactDOM.render(
	<AppContext>
		<App />
	</AppContext>,
	document.getElementById('root')
);
