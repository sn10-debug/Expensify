import React from "react";
import { BrowserRouter, Route, Switch, NavLink, Link } from "react-router-dom";
import PageNotAvailableComponent from "../Components/PageNotAvailable";

class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you for vistiting the Website !</p>
      </div>
    );
  }
}

class Portfolio extends React.Component {
  render() {
    return <p>You are viewing the Project {this.props.match.params.id}</p>;
  }
}

class PortfolioOptions extends React.Component {
  render() {
    return (
      <div>
        <h3>This are some of the Projects</h3>
        <Link to="/portfolio/1">Project-1</Link>
        <Link to="/portfolio/2">Project-2</Link>
      </div>
    );
  }
}

class PortfolioComponent extends React.Component {
  render() {
    console.log("Hello from Portfolio Component");
    return (
      <Switch>
        <Route path="/portfolio" exact={true} component={PortfolioOptions} />
        <Route path="/portfolio/:id" component={Portfolio} />
      </Switch>
    );
  }
}

class PortfolioHeader extends React.Component {
  render() {
    return (
      <header>
        <h1>Portfolio</h1>
        <NavLink to="/" activeClassName="active-page" exact={true}>
          Home
        </NavLink>
        <NavLink activeClassName="active-page" to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink activeClassName="active-page" to="/contact">
          Contact
        </NavLink>
      </header>
    );
  }
}

class ContactComponent extends React.Component {
  render() {
    return (
      <div>
        <p>You can contact me at nshakti.10@gmail.com</p>
      </div>
    );
  }
}

const PortfolioRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <PortfolioHeader />\{" "}
        <Switch>
          <Route path="/" component={HomeComponent} exact={true} />
          <Route path="/portfolio" component={PortfolioComponent} />
          <Route path="/contact" component={ContactComponent} />
          <Route component={PageNotAvailableComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default PortfolioRouter;
