import './App.css';
import React,  {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Redirect } from "react-router-dom";
import Jobs from './pages/Jobs'
import Login from './pages/Login'
import Detail from './pages/Detail'
import { useSelector } from "react-redux";

function App() {
  // let [user, setUser] = useState(useSelector((state) => state.user)) // if user is true -> logging in . if false, not logging in. 
  let user = useSelector((state) => state.user);

  const ProtectedRoute = (props) => {
  
    if (user.isAuthenticated === true) {
      return <Route {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  };

  return (
    <div>
      <Switch>
        <ProtectedRoute path="/jobs/:id" render={(props)=><Detail {...props}/>}/>
        {/* <Route path="/jobs/:id" component={Detail} /> */}
        <Route path="/jobs" component={Jobs} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Jobs} />

      </Switch>
    </div>
  );
}

export default App;
