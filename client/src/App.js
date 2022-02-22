import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom"
import './App.css';
import { Dashboard } from './views/Dashboard';
function App() {
  return (
    <BrowserRouter >
    <Switch>
      <Route exact path='/'>
        <Dashboard/>
      </Route>
      
    </Switch>
    </BrowserRouter>
  );
}

export default App;
