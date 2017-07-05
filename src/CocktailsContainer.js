import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import NavList from './NavList.js'
import CocktailDetails from './CocktailDetails.js'
import CocktailForm from './CocktailForm.js'

class CocktailsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cocktails: []
    }
  }

  componentWillMount() {
    this.fetchCoctails()
  }

  fetchCoctails() {
    const URL = 'http://localhost:3000/api/v1/cocktails'
    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({cocktails: data}))
  }

  render () {
    return (
        <div id="wrapper">
          <div id="nav-list"> 
            <NavList cocktails={this.state.cocktails} />
          </div>
          <div id="cocktail-details">
            <Route path='/cocktails/:cocktailId' 
            render={ props => { return(<CocktailDetails {...props} />)}} />
          </div>
          <div id='cocktail-form'>
            <CocktailForm />
          </div>
        </div>
    )
  }
}

export default CocktailsContainer