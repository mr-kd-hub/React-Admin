import './App.css';
import { Route,Switch } from 'react-router-dom';
import Login from './Pages/Login';
function App() {
  return (
    <>
      
          <Switch>
            <Route exact path="/">
              Dashboard
            </Route>
            <Route exact path="/login" component={Login} />
            <Route path="*" render={()=>"404 Not Found !!!"}/>
          </Switch>
      
    </>
  );
}

export default App;
