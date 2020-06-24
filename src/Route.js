import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Todo from './Pages/Todo';
import Footer from './components/Footer'
import Header from './components/Header'


export default function App() {
  return (
    <Router>
      <Header/>
      <div>
         <Switch>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}