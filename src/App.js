import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Projects from './components/Projects'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
import PortfolioNavbar from './components/PortfolioNavbar'

function App() {
  return (
    <div>
     <Router>
     <PortfolioNavbar />
        <Switch>
          <Route path='/projects' exact component={Projects} />
          <Route path='/about' exact component={About} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/resume' exact component={Resume} />
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
