import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import Admin from './Conatiner/Admin/Admin';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Admin/>} />
      </Routes>
    </Router>
  );
}

export default App;
