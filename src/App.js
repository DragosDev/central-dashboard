import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
//Pages
import Home from './pages/home/Home'
import User from './pages/user/User'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <User />
        </Route>
        <Route path="/user/:userId">
          <User />
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

export default App;
