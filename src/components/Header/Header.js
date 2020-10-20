import React from "react";
import {FaSearch, FaTimes, FaBars} from "react-icons/fa"

import {MenuItemsLinks, MenuItemsButtons} from "./MenuItemsElements";
import imgLogo from "./logo.png";

import "./Header.css"


export default class Header extends React.Component {
  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    const MenuLinks = MenuItemsLinks.map((item, index) => {
      return (
        <li className="nav-link-li" key={index}>
          <a className={item.cName} href={item.url}>
            {item.label}
          </a>
        </li>
      )
    })

    const MenuButtons = MenuItemsButtons.map((item, index) => {
      return (
        <li key={index}>
          <button className={item.cName}>
            {item.label}
          </button>
        </li>
      )
    })

    return (
      <header className="navbar">
        <a className="navbar-logo-link" href="#">
          <img className="navbar-logo"
               src={imgLogo}
               alt="navbar-logo"/>
        </a>
        <div
          className="toggle-icon"
          onClick={this.handleClick}>
          {this.state.clicked ? <FaTimes/> : <FaBars/>}
        </div>
        <div className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-links">
            {MenuLinks}
          </ul>
          {/*<input type="text"/>*/}
          <ul className="nav-menu-buttons">
            {MenuButtons}
          </ul>
        </div>
      </header>
    )
  }
}
