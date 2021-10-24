import './App.css';
import Navbar from './components/PortfolioNavbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Projects from './components/Projects'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'

function App() {
  return (
    <div>
     <Navbar />
     <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/resume' component={Resume} />
        </Switch>
      </Router>
    </div>
  );
}

export default App
