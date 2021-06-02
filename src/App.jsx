import { useState } from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import EggHatching from './pages/EggHatching';
import Main from './pages/Main';

function App() {

	const [showFade, setShowFade] = useState(false)
	return (
		<>
		{showFade && <div className='bg-white'></div>}
		<BrowserRouter>
			<Switch>
				<Route path="/" exact>
					<Main showFade={showFade} setShowFade={setShowFade} />
				</Route>
				<Route path="/egg-hatching" exact component={EggHatching} />
			</Switch>
	  </BrowserRouter>
	  </>
	)
}

export default App
