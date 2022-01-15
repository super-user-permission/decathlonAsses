import './App.css';
import Login from './Components/Login';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
