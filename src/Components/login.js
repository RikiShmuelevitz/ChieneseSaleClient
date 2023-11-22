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
import { useSelector, useDispatch } from "react-redux";
import {setSCurrentStudent} from '../store/studentSlice/studentAction'
import { InputText } from 'primereact/inputtext';
import '../csses/login.css'

export default function Login() {
    const[password,setPassword]=useState("")
    let isExist=false;
    const studentsList = useSelector((state) => state.students.studentsList);


    const navigate=useNavigate();
    const dispatch = useDispatch();

    const login=()=>{
      studentsList.forEach(element => {
        if(element.password==password){
          dispatch(setSCurrentStudent(element.studentId))
          isExist=true;
        }
      
      });
    if(isExist)
    navigate("/addDonation")
    else
      alert("הסיסמא שהקשת אינה נמצאת במערכת. הקישי סיסמא שונה.")
    
       
    }

  return (
    <>
    <div className="field col-12 md:col-4"  id="divLogin">
        <label>לכניסה הקישי קוד אישי</label><br/>
        {/* אם יהיה זמן לעשות שעובר דף בלחיצה על אנטר */}
        <InputText type="password"  id="password" toggleMask onChange={(e)=>setPassword(e.target.value)}/><br/>
       {/* <Password  id="password" toggleMask onChange={(e)=>setPassword(e.target.value)}/><br/> */}
       <Button label="הכנסי" className="p-button-raised p-button-secondary" onClick={()=>login()} /><br/>
        


    </div>
    </>
  );
}
