import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class CocktailsContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      activeItem: 'description',
      id: "",
      name: "",
      description: "", 
      instructions: "",
      source: "",
      proportions: []
    }
  }

  handleItemClick(e, name) {
    e.preventDefault()
    console.log(name.name)
    this.setState({activeItem: name.name})
    this.forceUpdate()
  }

  componentWillUpdate(){
    this.fetchCocktail()
    console.log("updating")
  }

  shouldComponentUpdate(newProps, newState) {
    return !(newProps.match.params.cocktailId === this.state.id.toString()) 
  }

  fetchCocktail(){
    console.log("updating")
    const URL = 'http://localhost:3000/api/v1/cocktails/' + this.props.match.params.cocktailId
    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({
        id: data.id,
        name: data.name,
        description: data.description,
        instructions: data.instructions,
        source: data.source,
        proportions: data.proportions

    }))
  }
  componentWillMount() {
   this.fetchCocktail() 
  }

  renderContent() {
    if (this.state.activeItem === 'description') {
      return (
        <div>
          <h1>{this.state.name}</h1>
          <p>{this.state.description}</p>
          <p>{this.state.source}</p>
        </div> 
      )
    }
    else if (this.state.activeItem === 'recipe') {
      return (
        <div>
          <p>{this.state.instructions}</p>
          <ul>{this.state.proportions.map( p => 
            <div>
              <p>{p.ingredient_name}</p>
              <li>{p.amount}</li>
            </div>
          )}
          </ul>
        </div>
      )
    }
  }

  render() {
    return(
      <div>
      <Menu pointing secondary>
        <Menu.Item name='description' active={this.state.activeItem === 'description'} onClick={this.handleItemClick.bind(this)} />
        <Menu.Item name='recipe' active={this.state.activeItem === 'recipe'} onClick={this.handleItemClick.bind(this)} />
     </Menu>
      <div className="box">
        {this.renderContent()}
      </div>
      </div>
    )
  }
}

export default CocktailsContainer