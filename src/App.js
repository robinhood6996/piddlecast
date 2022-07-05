import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './components/Login/Register';
import Login from './components/Login/Login';
import Home from './pages/Home';
import CreatePodCast from './pages/CreatePodCast';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create" element={<CreatePodCast />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
