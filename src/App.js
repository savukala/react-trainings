import './App.css';
import Home from './components/Home';
import Todolist from './components/Todolist';
import NotFound from './components/NotFound';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>{' '}
          <Link to="/todolist">Todolist</Link>{' '}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/todolist" component={Todolist} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;