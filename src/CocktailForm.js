import React from 'react'

class CocktailForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: ''
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.postCocktail()
  }

  postCocktail() {
    console.log(this.state)
    const data = {
      method: 'POST',
      header: {
        'Content-Type':'application/json'
      },
      cocktail: JSON.stringify(this.state)
    }
    console.log(data)

    fetch('http://localhost:3000/api/v1/cocktails', data)

  }



  render () {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
        <input type="text" name="description" value={this.state.description} onChange={this.handleChange.bind(this)}/>
        <button type="submit">Create</button>
      </form>
    )
  }
}

export default CocktailForm