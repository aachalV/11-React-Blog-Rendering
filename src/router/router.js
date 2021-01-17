import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Home from "../pages/home/Home";
import Blog from "../pages/Blog/Blog";
import Footer from "../components/footer/Footer";
class Router extends Component {
  render() {
    return (
      <BrowserRouter forceRefresh={true}>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog/:id" exact component={Blog} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
