import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EggHatching from './pages/EggHatching';
import Main from './pages/Main';

ReactDOM.render(
  <React.StrictMode>
	  <BrowserRouter>
		<Switch>
			<Route path="/" exact component={Main} />
			<Route path="/egg-hatching" exact component={EggHatching} />
		</Switch>
	  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
