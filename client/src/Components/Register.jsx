import { useState } from "react";

function Register(){
    const[userData, setUserdata]= useState({name: "",email:"",password:""})
    console.log(userData,"userData")
    const handleChange= (event)=>{
        setUserdata({...userData,[event.target.name]:event.target.value })

    }

    return(
        <div>
            <h1>Register</h1>

            <form>
                <label>Name</label><br/>
                <input type="text" onChange={handleChange}name="name"/><br/>
                <label>Email</label><br/>
                <input type="email"onChange={handleChange}name="email"/><br/>
                <label>Password</label><br/>
                <input type="password"onChange={handleChange}name="password"/><br/>
                <input type="Submit" value="Register"/><br/>
                
            </form>
        </div>
    )
}
export default Register;
