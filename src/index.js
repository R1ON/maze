import React from 'react';
import { render } from 'react-dom';

import './assets/sass/main.sass';

import App from './app';

const renderApp = () => {
	render(
			<App />,
		document.querySelector('#mount_place')
	)
}

renderApp()

if(module.hot) {
	module.hot.accept('./app', () => { renderApp() })
}
