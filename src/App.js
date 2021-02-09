
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/home/Homepage";
import PageOne from "./components/page1/Page1";
import PageTwo from "./components/page2/Page2";
import PageThree from "./components/page3/Page3";
import PageFour from "./components/page4/Page4";

const App = () => (
  /* NOTE. IF YOU WANT TO CHANGE THE LINK: CHANGE IT HERE AND INSIDE LINK IN NAVBAR.JS */
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route exact path="/page1">
      <PageOne />
    </Route>
    <Route exact path="/page2">
      <PageTwo />
    </Route>
    <Route exact path="/page3">
      <PageThree />
    </Route>
    <Route exact path="/page4">
      <PageFour />
    </Route>
  </Switch>
);

export default App