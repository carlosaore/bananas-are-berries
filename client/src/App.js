import { Switch, Route } from "react-router-dom";
import HomePage from "./components/home/Homepage";
import PageTwo from "./components/page2/Page2";
import PageThree from "./components/page3/CreateQR3";
import PageFour from "./components/page4/Page4";
import Dashboard from "./components/page1/Dashboard";
import Dashboard2 from "./components/page2/Dashboard2";

const App = () => (
  /* NOTE. IF YOU WANT TO CHANGE THE LINK: CHANGE IT HERE AND INSIDE LINK IN NAVBAR.JS */
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route exact path="/page1">
      <Dashboard />
    </Route>
    <Route exact path="/page2">
      <Dashboard2 />
    </Route>
    <Route exact path="/page3">
      <PageThree />
    </Route>
  
  </Switch>
);

export default App