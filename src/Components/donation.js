import React,{useState,useRef} from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css"; 
import { InputText } from 'primereact/inputtext';
import { RadioButton } from "primereact/radiobutton";
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { SelectButton } from 'primereact/selectbutton';
import { useNavigate } from 'react-router-dom';  
import {setStudentsSum} from '../store/studentSlice/studentAction'
import { useDispatch } from "react-redux";
import '../csses/donation.css'


export default function Donation(){
    // const [formData, setFormData] = useState({
    //     donorName: '',
    //     sum: 0,
    //     POM:'',
    //     isRecepie:false,
    //     recepieName:''
    //   });
    const donorNameRef = useRef();
    const sumRef = useRef();
    const PMORef = useRef();
    const isRecepieRef = useRef();
    const recepieNameRef = useRef();
    const options = ['כן','לא'];
    const [value, setValue] = useState();
    const [isRecepie, setIsRecepie] = useState(false);
    const [isChek, setIsChek] = useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const categories = [
        { name: 'מזומן', key: 'A' },
        { name: 'צק', key: 'M' },
        { name: 'אשראי', key: 'P' }
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);   
    function recepie(e){
       setValue(e.value)
       if(selectedCategory.name==='צק')
            setIsChek(true)
        if(e.value=='כן')
        {
            setIsRecepie(true);
            console.log("isRecepieF",isRecepie)
            console.log(e.value)
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault(); // זה מונע מהטופס לשלוח בצורה דיפולטיבית      
    

      };
    const saveDetails=()=>{

        console.log("sum: ",sumRef.current.value)
       dispatch(setStudentsSum(sumRef.current.value));

    }
    return(<>
        <form  >
            {/* <div  id="divForm" className="field col-12 md:col-4"> */}
                <h2>פרטי התרומה</h2>
                {/* <span className="p-float-label"> */}
                    <InputText id="inputtext" placeholder="שם התורם" ref={donorNameRef} /><br/>
                    {/* <label htmlFor="inputtext" style={{direction: "rtl"}}>שם התורם</label> */}
                {/* </span><br/> */}
                {/* <span className="p-float-label"> */}
                    <InputText type="number" id="inputtext" placeholder="סכום התרומה"  ref={sumRef} />
                    {/* <label htmlFor="inputtext">סכום התרומה</label> */}
                {/* </span> */}
              
                <div className="flex flex-column gap-3" id="paymentType">
                    <label className="labelOption" htmlFor="inputtext">אמצעי תשלום </label>
                    {categories.map((category) => {
                        return (
                            <div key={category.key} className="flex align-items-center" >
                                <RadioButton inputId={category.key} name="category" value={category} ref={PMORef}   onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                                <label htmlFor={category.key} className="ml-2">{category.name}</label>
                            </div>
                        );
                    })}
                </div><br/>
                <label className="labelOption">מעוניינת בקבלה סעיף 46</label><br/>
                <SelectButton value={value} onChange={(e) => recepie(e)} options={options} onClick={console.log(value)}   ref={isRecepieRef} /><br/>
                {
                    isChek&&<p>גשי עם הצק לגיזברות בימים:    בין השעות:</p>
                }
                {console.log("isRecepie: ",isRecepie)}
                {               
                    isRecepie&&<>
                    <InputText id="inputtext" placeholder="על שם מי הקבלה" ref={recepieNameRef} />
                    </>
                }
                <br/>
                <Button type="button" label="הכנס תרומה" className="p-button-raised p-button-secondary"  onClick={()=>saveDetails()}/><br/>
                <Button label="תרומה חדשה" className="p-button-raised p-button-secondary"/><br/>
                <Button label="סיימתי לעדכן" className="p-button-raised p-button-secondary" onClick={(e)=>{navigate("/points")}}/>

                
            {/* </div> */}
        </form>  
        </>)
}


