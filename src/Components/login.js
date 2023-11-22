import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css"; 
import { Password } from 'primereact/password';      
import { useNavigate } from 'react-router-dom';           //core css
//import "primeicons/primeicons.css";  
import { Button } from 'primereact/button';
import { Container } from '@mui/material';

export default function Login() {
    const[password,setPassword]=useState("")
    const navigate=useNavigate();
    const login=()=>{
        console.log("password: ",password)
        navigate("/addDonation")
    }

  return (
    <>
    <div className="field col-12 md:col-4">
        <label>לכניסה הקישי קוד אישי</label><br/>
        {/* אם יהיה זמן לעשות שעובר דף בלחיצה על אנטר */}
      
       <Password  id="password" toggleMask onChange={(e)=>setPassword(e.target.value)}/><br/>
       <Button label="הכנס" className="p-button-raised p-button-secondary" onClick={()=>login()} /><br/>
        


    </div>
    </>
  );
}
