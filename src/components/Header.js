import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./main.css"

function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/all" activeClassName="selected">All Data</NavLink>
          </li>
          <li>
            <NavLink to="/posts" activeClassName="selected">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/users" activeClassName="selected">Users</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
