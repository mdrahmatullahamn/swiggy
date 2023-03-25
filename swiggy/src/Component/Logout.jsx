import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
const Logout=()=>{
    const[currentUser, setCurrentUser]=useState(false);
    const router=useNavigate();

    useEffect(()=>{
      var currentUserFromLS=JSON.parse(localStorage.getItem("current-user"))
      if(currentUserFromLS){
        setCurrentUser(true);
      }
    },[])
    function logout(){
      localStorage.removeItem("current-user");
      window.location.reload();
      alert("logout sucessfully done.....")
  }
    return(
    <div>
        <h1>homepage</h1>
        {currentUser ? <button onClick={logout}>Logout</button> :<button onClick={()=>router('/login')}>Login</button>}
        
        
    </div>
    )
}
export default Logout;