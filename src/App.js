import logo from './logo.svg';
import './App.css';
import Data from './Components/Data';
import Profile from './Components/Profile';
import { Route, Routes } from 'react-router';
import Blogs from './Components/Blogs';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Data />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
