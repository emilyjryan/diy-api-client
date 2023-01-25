import Home from './components/pages/Home'
import NewConstellation from './components/pages/NewConstellation'
import Navbar from './components/Navbar'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />

          <Route 
            path='/new-constellation'
            element={<NewConstellation />}
          />
        </Routes>
      </main>

      {/* could have a footer */}
    </Router>
  );
}

export default App;