import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import DashboardPage from "../Components/DashboardPage";
import CreateExpensePage from "../Components/CreateExpensePage";
import EditExpensePage from "../Components/EditExpensePage";
import AboutPageComponent from "../Components/AboutPageComponent";
import HelpPage from "../Components/HelpPage";
import Header from "../Components/Header";
import PageNotAvailableComponent from "../Components/PageNotAvailable";

// const routes = (
//   <BrowserRouter>
//     <div>
//       <Route path="/" component={DashboardPage} exact={true} />
//       <Route path="/about" component={AboutPageComponent} exact={true} />
//       <Route path="/create" component={CreateExpensePage} exact={true} />
//       <Route path="/edit" component={EditExpensePage} exact={true} />
//       <Route path="/help" component={HelpPage} exact={true} />
//     </div>
//   </BrowserRouter>
// );

// Browser router excepts only one child element

// If we don't define exact then React will only check whether the url path starts in the way as it is mentioned in the url prop

// In order to match the exact path , we need to define exact as true

// When we use Switch Component and mention the routes inside it then if it finds the match of the route then it renders the corresponding component and does not look for other routes as it was happening without using Switch Component

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/about" component={AboutPageComponent} />
        <Route path="/create" component={CreateExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={PageNotAvailableComponent} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
