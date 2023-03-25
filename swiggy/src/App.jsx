import logo from './logo.svg';
import './App.css';
import Homep from './Component/Homep';
import { Route,Routes } from 'react-router-dom';
import Addproducts from './Component/Addproducts';
import Homeswig from './Component/Homeswig';
import Navbar from './Component/Navbar';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Logout from './Component/Logout';
import AddToCart from './Component/AddToCart';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homep/>}/>
        <Route exact path='/addproducts' element={<Addproducts/>}/>
        <Route exact path='/homeswig'element={<Homeswig/>}/>
        <Route exact path='/navbar' element={<Navbar/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/logout' element={<Logout/>}/>
        <Route exact path='/addtocart' element={<AddToCart/>}/>
      </Routes>

      
    </div>
    
    
    
  );
}

export default App;
