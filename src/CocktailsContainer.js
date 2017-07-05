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
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Grid, Row } from 'semantic-ui-react'
import MainDivRouter from './MainDivRouter.js'

class CocktailsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cocktails: [],
      active: false
    }
  }
  toggleVisibility() { 
    this.setState({ active: !this.state.active })
    console.log(this.state)
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

      <div className="container">
        <Segment>
          <Header className="header" as='h2' inverted color='orange'>Boozer</Header>
          <Button toggle active={this.state.active} onClick={this.toggleVisibility.bind(this)}>Show All</Button>
          <Link to='/cocktails/new'><Button className="right" >New Cocktail</Button></Link>
        </Segment>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={this.state.active} icon='labeled' vertical inverted>

              <NavList cocktails={this.state.cocktails} />

          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic size='medium' >
              <div id="cocktail-details">

                <MainDivRouter />
               
              </div>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default CocktailsContainer