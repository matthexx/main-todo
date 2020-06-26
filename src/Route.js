import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from './Pages/Home';
import Todo from './Pages/Todo';
import Footer from './components/Footer'
import Header from './components/Header'


export default function App() {
  const [ user, setUser] = React.useState('')
  return (
    <Router>
      <Header user={user}/>
      <div>
         <Switch>
          <Route path="/todo">
           {!user ? <Redirect to="/"/> : <Todo/>}
          </Route>
          <Route path="/">
            <Home setUser={setUser} />
          </Route>
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
}