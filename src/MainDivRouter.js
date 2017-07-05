import React from 'react'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import CocktailDetails from './CocktailDetails.js'
import CocktailForm from './CocktailForm.js'

class MainDivRouter extends React.Component {

  render () {
    return (
      <Switch>
        <Route path='/cocktails/new' render={p=>{return(<CocktailForm {...p} /> )}} />
        <Route path='/cocktails/:cocktailId' render={p=>{return(<CocktailDetails {...p} />)}} />
      </Switch>
    )
  }
}

export default MainDivRouter