import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import { AuthProvider } from "./context/auth";
function App() {
  return (
    <>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/login" component={Login} />
          <Route path="*" render={() => "404 Not Found !!!"} />
        </Switch>
      </AuthProvider>
    </>
  );
}

export default App;
