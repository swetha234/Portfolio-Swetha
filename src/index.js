import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Context as ResponsiveContext } from 'react-responsive';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<ResponsiveContext.Provider value={{ width: 500 }}>
			<App />
		</ResponsiveContext.Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
registerServiceWorker();
