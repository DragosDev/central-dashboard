import Topbar from './components/topbar/Topbar'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
//Pages
import Home from './components/pages/home/Home'

function App() {
  return (
    <div>
      <Topbar/>
      <div className="container">
      <Sidebar/>
      <Home/>
      </div>
    </div>
  )
}

export default App;
