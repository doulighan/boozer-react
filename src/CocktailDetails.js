import React from 'react'

class CocktailsContainer extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      id: "",
      name: "",
      description: "", 
      proportions: []
    }
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
        proportions: data.proportions
    }))
  }
  componentWillMount() {
   this.fetchCocktail() 
  }

  render() {
    return(
      <div>
        <h1>{this.state.name}</h1>
        <h4>id: {this.state.id}</h4>
        <p>{this.state.description}</p>
      </div>
    )
  }
}

export default CocktailsContainer