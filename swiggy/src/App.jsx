import logo from './logo.svg';
import './App.css';
import Homep from './Component/Homep';
import { Route,Routes } from 'react-router-dom';
import Addproducts from './Component/Addproducts';
import Homeswig from './Component/Homeswig';
import Navbar from './Component/Navbar';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homep/>}/>
        <Route exact path='/addproducts' element={<Addproducts/>}/>
        <Route exact path='/homeswig'element={<Homeswig/>}/>
        <Route exact path='/navbar' element={<Navbar/>}/>
      </Routes>

      
    </div>
    
    
    
  );
}

export default App;
