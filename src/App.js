import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Segment, Header} from 'semantic-ui-react'

import CocktailsContainer from './CocktailsContainer.js'
import CocktailDetails from './CocktailDetails.js'

class App extends Component {
  render() {
    return (
    <Router>
    
    <div>
      <Route path='/cocktails' 
      component={CocktailsContainer} />

      
      </div>
    </Router>
    )
  }
}

export default App;
