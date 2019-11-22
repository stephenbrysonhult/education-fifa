import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import efLogo from "../../assets/img/ef.png";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img className="header__logo-item header__logo-item--ef" src={efLogo} alt={efLogo} />
        <FontAwesomeIcon
          className="header__logo-item"
          icon={["fab", "playstation"]}
        />
        <FontAwesomeIcon
          className="header__logo-item"
          icon={["fal", "futbol"]}
        />
      </div>
      <nav className="header__nav">
        <div className="header__nav-item">
          <FontAwesomeIcon
            className="header__nav-item-live"
            icon={["fas", "circle"]}
          />
          <span>Live</span>
        </div>
        {/* <a className="header__nav-item" href="/players">
          <span>Players</span>
        </a> */}
      </nav>
    </div>
  );
}

export default Header;
