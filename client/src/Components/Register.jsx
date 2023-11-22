import { useState } from "react";

function Register(){
    const[userData, setUserdata]= useState({name: "",email:"",password:""})
    console.log(userData,"userData")
    const handleChange= (event)=>{
        setUserdata({...userData,[event.target.name]:event.target.value })

    }
    const handleSubmit = async(event) => {
        event.preventDefault();
        if(userData.name && userData.email && userData.password){

            // try{
            //     const response= await axios.post("htpp://localhost:8000/register",{userData})
            //     if(response.data.success){
            //         alert("Registration successfull.")
            //     }
            // }catch(error){
            //     alert(error.response.data.message)
            // }

            const myUsers= JSON.parse (localStorage.getItem("USERS")) || [];

            myUsers.push(userData)

            localStorage.setItem("USERS",JSON.stringify(myUsers))

            alert("Registration successfull.")

    } else {
            alert("Please fill the all values.")
    }
}

    return(
        <div>
            <h1>Register</h1>

            <form onSubmit={handleSubmit}>
                <label>Name</label><br/>
                <input type="text" onChange={handleChange}name="name" required/><br/>
                <label>Email</label><br/>
                <input type="email"onChange={handleChange}name="email"required/><br/>
                <label>Password</label><br/>
                <input type="password"onChange={handleChange}name="password"required/><br/>
                <input type="Submit" value="Register"/><br/>
                
            </form>
        </div>
    )
}

export default Register;
