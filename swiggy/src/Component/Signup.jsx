import React, { useState } from "react";
import "./component.css";
// import {useNavigate} from 'react-router-dom'




function Signup(props) {
const[userData, setUserData] = useState({name:'', email:'', password: ''});
// const router = useNavigate()

    function submit(e){
        e.preventDefault();

        var dataFromLs = JSON.parse(localStorage.getItem("userInfo")) || [];

        var flag =false;
        for( var i=0; i<dataFromLs.length; i++){
            if(dataFromLs[i].email === userData.email){
                flag =true;
            }
        }
        if(flag){
            setUserData({...userData, ['email']:''});
            return alert("email already exsited");
        }
        else if( userData.password.length <8){
            setUserData({...userData, ['password']:''});
            alert("password must be 8 characters");
        }
        else{
            dataFromLs.push(userData);
            localStorage.setItem("userInfo",JSON.stringify(dataFromLs));
            setUserData({name:'', email:'', password: ''});
            alert("Registration done");
        }
        
    }


    // function submit(e){
    //      e.preventDefault();

    //      var userFromLS= JSON.parse(localStorage.getItem("userInfo")) || [];

    //      var flag= false;
    //      for (var i=0; i<userFromLS.length;i++){
    //         if(userFromLS[i].email===userData.email){
    //             flag=  true;
    //         }
    //      }
    //      if(flag){
    //         setUserData({...userData,['email']:''});
    //         alert("email alredy exitsed");
    //      }
    //      else if(userData.password.length<8){
    //         setUserData({...userData,['password']:''});
    //         alert("most be fill all fields")
    //      }
    //      else{
    //         userFromLS.push(userData);
    //         localStorage.setItem("userInfo",JSON.stringify(userFromLS));
    //         setUserData({name:'',passsword:'',email:''});
    //         alert("registration done")
    //      }







    

    function dataFetch(e){
        var value =e.target.value;
        var name = e.target.name;

        setUserData({...userData, [name]:value});

    }
    return(
        <div id='sign-up'>
            <div className="signUp-page">
                <div onClick={props.onClose}> X </div>
                <div>
                    <div>
                        <h2>Sign up</h2>
                        <p> <strong> or </strong>login to your account</p>
                    </div>
                    <div></div>
                </div>

                <div>
                    <form>
                        <input type='text' placeholder="Name" onChange={(e) => {dataFetch(e)}} name="name" required value={userData.name}/>
                        <input type='email' placeholder="Email" onChange={(e) => {dataFetch(e)}} name="email" required value={userData.email}/>
                        <input type='password' placeholder="Password" onChange={(e) => {dataFetch(e)}} name="password" required value={userData.password}/>
                    </form>
                </div>

                <div>
                    <p>Have a referral code?</p>
                    <button onClick={(e) => submit(e)}>Continue</button>
                    <p>By creating an account, I accept the <strong>Terms & Conditions & Privacy Policy</strong></p>
                </div>
            </div>
        </div>
    )
}
export default Signup; 