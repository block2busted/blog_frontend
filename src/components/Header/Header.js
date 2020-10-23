import React from "react";
import {FaBars, FaTimes} from "react-icons/fa"
import RippleSpan from "../RippleSpan";

import { menuItemsButtons, menuItemsLinks} from "./menuItemsElements";
import imgLogo from "./logo.png";

import "./Header.css"


export default class Header extends React.Component {
  state = {
    toggleClicked: false,
    ripple: {},
    timerId: null
  };

  toggleClick = () => {
    this.setState({toggleClicked: !this.state.toggleClicked})
  };

  clickedButton = (buttonType) => {
    clearTimeout(this.state.timerId)
    const newRipple = {
      item: buttonType,
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop
    };

    this.setState({
      ripple: newRipple
    });

    this.state.timerId = setTimeout(() => {
        this.setState({
          timerId: null,
          ripple: {}
        })
      }, 1000)
  };

  render() {
    const MenuLinks = menuItemsLinks.map((item, index) => {
      return (
        <li className="nav-link-li" key={index}>
          <a className={item.cName} href={item.url}>
            {item.label}
          </a>
        </li>
      )
    })

    const MenuButtons = menuItemsButtons.map((item, index) => {
      return (
        <li key={index}>
          <button
            className={item.cName}
            onClick={(event) => this.clickedButton(item.type)}
          >
            {item.label}
            {this.state.ripple.item === item.type ?
              <RippleSpan ripple={this.state.ripple} />
              : null}
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
          onClick={this.toggleClick}>
          {this.state.toggleClicked ? <FaTimes/> : <FaBars/>}
        </div>
        <div className={this.state.toggleClicked ? "nav-menu active" : "nav-menu"}>
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
