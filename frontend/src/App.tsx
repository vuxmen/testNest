import { FC, useState } from "react";
import Login from "./Page/Login";
import Import from "./Page/Import";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

const App: FC = () => {
  const [isLogin, setLogin] = useState<boolean>(true);
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            {isLogin ? <Redirect to="/Login" /> : <Redirect to="/Import" />}
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Import">
            <Import />
          </Route>
        </Switch>
      </>
    </Router>
  );
};

export default App;
