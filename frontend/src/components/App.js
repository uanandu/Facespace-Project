import { BrowserRouter, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import { HomePage } from "./HomePage";
import {NavBar} from "./NavBar";
import { SignIn } from "./SignIn";
import { UserProfile } from "./UserProfile";


const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <GlobalStyles />
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route exact path="/users/:id">
            <UserProfile/>
          </Route>
          <Route exact path="/signin">
            <SignIn/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
