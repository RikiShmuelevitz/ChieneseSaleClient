import React,{useState} from "react";
import { SelectButton } from 'primereact/selectbutton';
import { Navigate, useNavigate } from 'react-router-dom';

export default function AddDonation(){
    const options = ['להכנסת תרומות ללא טופס', 'למילוי טופס'];
    const [value, setValue] = useState();
    const[name, setName]=useState('רחל')
    const navigate=useNavigate();
    const EnteringDonation=(e)=>{
        setValue(e.value)
        if(e.value==='להכנסת תרומות ללא טופס')
            navigate("/donation")
        else 
            navigate("/donationForm")
    }
    return(<>
        <label>שלום ל{name}</label>
        <SelectButton value={value} onChange={(e) => EnteringDonation(e)} options={options} />
    </>)
}
