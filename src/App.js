import React, { createContext, useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import GoogleSignin from './Components/Authentication/GoogleSignin';
import Navigation from './Components/Navigation/Navigation';
import Register from './Components/Register/Register';
import Event from './Components/Event/Event'
import Admin from './Components/Admin/Admin';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Error from './Components/Error/Error';


export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
  })
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
      <Navigation />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/events">
            <Event />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <GoogleSignin />
          </Route>
          <PrivateRoute path="/registration/:clickedSector">
            <Register />
          </PrivateRoute>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
