import { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import Home from "../pages/home/Home";
import Footer from "../components/footer/Footer";
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route
            path="/employees/:id"
            exact
            render={(props) => {
              console.log("history", props);
              return <Profile {...props} />;
            }}
          /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
