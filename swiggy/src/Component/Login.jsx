import { useState } from "react";

import "./component.css";
function Login(){
    const[dataVL, setFormData] =useState({email:'', password:'' });
    function submit(e){
        e.preventDefault();
        var datFromLS = JSON.parse(localStorage.getItem("userInfo"))
        var flag=false;
        for(var i=0; i<datFromLS.length; i++){
            if(datFromLS[i].email === dataVL.email && datFromLS[i].password === dataVL.password){
                flag =true;
            }
        }
        if(flag===true){
            setFormData({email:'',password:''});
            alert("Log in sucessful");
        }
        else{
            setFormData({email:'',password:''});
            alert("Please check email or password");
        }
        
    }
    function dataFetch(e){
        var value = e.target.value;
        var name = e.target.name;
        setFormData({...dataVL, [name]:value});

    }

    return(
        <div>
            <input onChange={(e) => {dataFetch(e)}} type="email"  placeholder="enter your email" name="email"  /> <br/>
            <input  onChange={(e) => {dataFetch(e)}} type="password" placeholder="enter your password" name="password" /> <br />
            <button  onClick={(e)=>submit(e)}>submit</button>
        </div>
    )
    
}
export default Login;