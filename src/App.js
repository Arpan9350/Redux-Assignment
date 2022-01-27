import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Add from './components/Add';
import See from './components/See'
import Nutrition from './components/Nutrition';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Add" element={<Add/>}></Route>
          {/* <Route path="/See" element={<See/>}></Route> */}
          <Route path="/Nutrition" element={<Nutrition/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
