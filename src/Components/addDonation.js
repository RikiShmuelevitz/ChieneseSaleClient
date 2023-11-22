import React,{useState} from "react";
import { SelectButton } from 'primereact/selectbutton';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { Button } from 'primereact/button';
import '../csses/addDonation.css'

export default function AddDonation(){
    const options = ['להכנסת תרומות ללא טופס', 'למילוי טופס'];
    const [value, setValue] = useState();
    const student=useSelector((state) => state.students.currentStudent);

    const navigate=useNavigate();
    // const EnteringDonation=(e)=>{
    //     console.log("currstudent: ",student)

    //     setValue(e.value)
    //     if(e.value==='להכנסת תרומות ללא טופס')
    //         navigate("/donation")
    //     else 
    //         navigate("/donationForm")
    // }
    return(<div id="divFirst">
   { console.log("student: ",student)}
        <label>שלום ל{student.firstName} {student.lastName}</label><br/>
        <Button label="להכנסת תרומות ללא טופס" className="p-button-raised p-button-secondary" onClick={()=>navigate("/donation")} /><br/>
        <Button label="למילוי טופס" className="p-button-raised p-button-secondary" onClick={()=>navigate("/donationForm")} /><br/>
        {/* <Button id="but1" className="p-button-raised p-button-secondary" onClick={()=>{}}>להכנסת תרומות ללא טופס</Button> */}
        {/* <Button id="but2" className="p-button-raised p-button-secondary" onClick={()=>{navigate("/donationForm")}}>למילוי טופס</Button> */}
    </div>)
}
