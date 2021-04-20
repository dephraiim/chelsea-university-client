import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Content from './components/Content';
import Login from './components/Login';
import Protected from './components/Protected';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className='h-screen bg-indigo-100'>
        <div>
          <div className='header-2'>
            <nav className='bg-white py-2 md:py-4'>
              <div className='container px-4 mx-auto md:flex md:items-center'>
                <div className='flex justify-between items-center'>
                  <Link to='/'>
                    <a className='font-bold text-xl text-indigo-600'>
                      Chelsea University
                    </a>
                  </Link>
                </div>

                <div className='hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0'>
                  <Link to='/protected'>
                    <a className='p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300'>
                      Protected
                    </a>
                  </Link>
                  <Link to='/login'>
                    <a className='p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300'>
                      Login
                    </a>
                  </Link>
                  <Link to='/register'>
                    <a className='p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1'>
                      Signup
                    </a>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <Switch>
          <Route exact path='/'>
            <Content />
          </Route>
          <Route path='/protected'>
            <Protected />
          </Route>
          <Route path='/login'>
            <Login />
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
