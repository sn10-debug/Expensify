import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => (
  <header>
    <h2>Expensify</h2>
    <div className="header-link">
      <NavLink activeClassName="active-page" exact={true} to="/">
        Dashboard
      </NavLink>
    </div>
    <div className="header-link">
      <NavLink activeClassName="active-page" exact={true} to="/create">
        Create Expense
      </NavLink>
    </div>
    <div className="header-link">
      <NavLink activeClassName="active-page" exact={true} to="/edit">
        Edit Expense
      </NavLink>
    </div>
    <div className="header-link">
      <NavLink activeClassName="active-page" exact={true} to="/help">
        Help
      </NavLink>
    </div>
    <div className="header-link">
      <NavLink activeClassName="active-page" exact={true} to="/about">
        About
      </NavLink>
    </div>
  </header>
);

export default Header;
