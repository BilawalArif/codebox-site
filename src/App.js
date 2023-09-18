import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageScrollTop from "./components/pageToTop/PageScrollTop";

import Startup from "./pages/Startup";
import AboutUs from "./pages/AboutUs";
import Contact from "./elements/contact/Contact";
import FAQ from "./pages/FAQ's";
// Import Css Here
import "./assets/scss/style.scss";
const App = () => {
  return (
    <Router>
      <PageScrollTop>
        <Switch>
          <Route
            path={`${process.env.PUBLIC_URL + "/"}`}
            exact
            component={Startup}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/about-us"}`}
            exact
            component={AboutUs}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            exact
            component={Contact}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/faqs"}`}
            exact
            component={FAQ}
          />
        </Switch>
      </PageScrollTop>
    </Router>
  );
};

export default App;
