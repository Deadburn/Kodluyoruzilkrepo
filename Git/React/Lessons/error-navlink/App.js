import './App.css';

import Home from './components/Home/Home'
import Users from './components/Users/Users'
import About from './components/About/About'
import User from './components/User/User'
import Error404 from './components/Error/Error404'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active" >About</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName="active" >Users</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/user/:id" component={User} />
          <Route path="*" component={Error404}></Route>
        </Switch>
      </div>
    </Router>
  );
}




export default App;
