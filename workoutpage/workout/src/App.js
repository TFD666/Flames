import './App.css';
import {Route,Routes} from 'react-router-dom';
import{box} from '@mui/material';
import Home from './pages/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/exercise/:id" />
      </Routes>
    </box>
    
  );
}

export default App;
