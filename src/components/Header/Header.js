import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header-component">
      <img
        className="pga-main-logo"
        src={"https://i.imgur.com/Woohrez.png"}
        alt="Professional Golfers of America Logo"
      />
    </div>
  );
}

export default Header;
