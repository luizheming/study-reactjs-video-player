import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Player from '../Player'
import GlobalStyle from '../../config/themes'

const App = () => (
	<BrowserRouter>
		<React.Fragment>
			<Switch>
				<Route exact path='/' component={Player} />
				<Route exact path='/:activeVideo' component={Player} />
			</Switch>
			<GlobalStyle />
		</React.Fragment>
	</BrowserRouter>
)

export default App
