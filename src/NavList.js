import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'

const NavList = ({ cocktails }) => {
  return (
      <div>
        {cocktails.map( cocktail => 
          <li key={cocktail.id}>
            <Link to={`/cocktails/${cocktail.id}`}>
              {cocktail.name}
            </Link>
          </li>
        )}
      </div>
  )
}

export default NavList