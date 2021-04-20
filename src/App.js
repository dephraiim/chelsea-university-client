import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Login from './components/Login';
import Header from './components/Header';
import Protected from './components/Protected';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className='h-screen bg-indigo-100'>
        <Header link={Link} />
        <Switch>
          <Route exact path='/'>
            <Content link={Link} />
          </Route>
          <Route path='/protected'>
            <Protected />
          </Route>
          <Route path='/login'>
            <Login redirect={Redirect} />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
