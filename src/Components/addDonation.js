import React,{useState} from "react";
import { SelectButton } from 'primereact/selectbutton';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";


export default function AddDonation(){
    const options = ['להכנסת תרומות ללא טופס', 'למילוי טופס'];
    const [value, setValue] = useState();
    const student=useSelector((state) => state.students.currentStudent);

    const[name, setName]=useState('רחל')
    const navigate=useNavigate();
    const EnteringDonation=(e)=>{
        console.log("currstudent: ",student)

        setValue(e.value)
        if(e.value==='להכנסת תרומות ללא טופס')
            navigate("/donation")
        else 
            navigate("/donationForm")
    }
    return(<>
   { console.log("student: ",student)}
        <label>שלום ל{student.firstName} {student.lastName}</label>
        <SelectButton value={value} onChange={(e) => EnteringDonation(e)} options={options} />
    </>)
}
