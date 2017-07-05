import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

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
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(this.state)
    }
    

    fetch('http://localhost:3000/api/v1/cocktails', data)
  }



  render () {
    return (

      <Form>
         <Form.Group widths='equal'>
           <Form.Field id='form-input-control-name' control={Input} label='Name:' placeholder='Name' />
           <Form.Field id='form-input-control-source' control={Input} label='Source:' placeholder='Source' />
         </Form.Group>
         <Form.Field id='form-textarea-control-description' control={TextArea} label='Description' placeholder='Description' /> 
         <Form.Field id='form-textarea-control-instructions' control={TextArea} label='Instructions' placeholder='Instructions' />
         <Form.Field id='form-button-control-public' control={Button} content='Submit' />
        </Form>
    )
  }
}

export default CocktailForm












