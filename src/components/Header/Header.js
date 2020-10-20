import React from "react";
import {FaBars, FaTimes} from "react-icons/fa"

import {MenuItemsButtons, MenuItemsLinks} from "./MenuItemsElements";
import imgLogo from "./logo.png";

import "./Header.css"

const RippleSpan = ({ripple}) => {
    const rippleStyle = {
        left: `${ripple.x}px`,
        top: `${ripple.y}px`
      };
    return (
      <span style={rippleStyle}>
      </span>
    )
  }


export default class Header extends React.Component {
  state = {
    toggleClicked: false,
    ripple: {},
    timerId: null
  };

  toggleClick = () => {
    this.setState({toggleClicked: !this.state.toggleClicked})
  };

  clickedButton = (type) => {
    clearTimeout(this.state.timerId)
    const newRipple = {
      type: type,
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
          <button
            className={item.cName}
            onClick={(event) => this.clickedButton(item.type)}
          >
            {item.label}
            {this.state.ripple.type === item.type ?
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
