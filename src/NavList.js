import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'

const NavList = ({ cocktails }) => {
  return (
      <div>
      <List>
        {cocktails.map( cocktail => 
          <List.Item>
            <List.Header>{cocktail.id}</List.Header>
            <Link to={`/cocktails/${cocktail.id}`}>
              {cocktail.name}
            </Link>
          </List.Item>
        )} 
        </List>
      </div>
  )
}

export default NavList