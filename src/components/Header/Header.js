import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import RippleSpan from "../RippleSpan";
import RippleButton from "../RippleButton";
import { menuItemsButtons, menuItemsLinks} from "./menuItemsElements";

import { onToggleClicked } from "../../actions"
import { connect } from "react-redux";
import { compose } from "../../utils";

import imgLogo from "./logo.png";
import "./Header.css";


class Header extends React.Component {

  render() {
    console.log(this.props, 'props')

    const { toggleClicked, onToggleClicked } = this.props;

    const MenuLinks = menuItemsLinks.map((item, index) => {
      return (
        <li className="nav-link-li" key={index}>
          <a className={item.cName} href={item.url}>
            {item.label}
          </a>
        </li>
      )
    });

    const MenuButtons = menuItemsButtons.map((item, index) => {
      return (
        <li key={index}>
          <RippleButton item={item}/>
        </li>
      )
    });

    return (
      <header className="navbar">
        <a className="navbar-logo-link" href="#">
          <img className="navbar-logo"
               src={imgLogo}
               alt="navbar-logo"/>
        </a>
        <div
          className="toggle-icon"
          onClick={onToggleClicked}>
          {toggleClicked ? <FaTimes/> : <FaBars/>}
        </div>
        <div className={toggleClicked ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-links">
            {MenuLinks}
          </ul>
          <ul className="nav-menu-buttons">
            {MenuButtons}
          </ul>
        </div>
      </header>
    )
  }
}


const mapStateToProps = ({ headerState: { toggleClicked } }) => {
  return {
    toggleClicked: toggleClicked
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleClicked: () => dispatch(onToggleClicked())
  }
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(Header);
