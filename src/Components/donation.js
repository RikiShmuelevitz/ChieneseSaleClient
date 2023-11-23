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
import {addDonation}from '../store/donationSlice/donationAction'
import { useDispatch,useSelector } from "react-redux";
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
import '../csses/donation.css'


export default function Donation(){
   
    const donorNameRef = useRef();
    const sumRef = useRef();
    const isRecepieRef = useRef();
    const recepieNameRef = useRef();
    const [value, setValue] = useState();
    const [isRecepie, setIsRecepie] = useState(false);
    const [isChek, setIsChek] = useState(false);
    const [isEnterDonation, setIsEnterDonation] = useState(false);


    const options = ['כן','לא'];
    const categories = [
        { name: 'מזומן', key: 'A' },
        { name: 'צק', key: 'M' },
        { name: 'אשראי', key: 'P' }
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);  
    
    const student=useSelector((state) => state.students.currentStudent);

    const dispatch=useDispatch();
    const navigate=useNavigate();

    function recepie(e){
       setValue(e.value)
       if(selectedCategory.name==='צק')
            setIsChek(true)
        if(e.value=='כן')
        {
            setIsRecepie(true);
          
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault(); 

        let sId=student.studentId
        // console.log("sId: ",sId)
        let mop=selectedCategory.name
         console.log("mop: ",selectedCategory.name)
        let dName=donorNameRef.current.value
        // console.log("dName: ",donorNameRef.current.value)
        var rec;
        if(isRecepie){
           rec=recepieNameRef.current.value
        // console.log("rec: ",recepieNameRef.current.value)
        }
        else
         rec=" ";
       let sum=sumRef.current.value
    //    console.log("sum: ",sumRef.current.value)

        dispatch(addDonation({donationId:1,studentId:sId,MOP:mop,donorName:dName,Recepies:rec,sum:sum}))
       dispatch(setStudentsSum(sum));
       setIsEnterDonation(false)

       sId=0
       mop=''
       rec=''
       sum=0
       event.target.reset();
  

      };
   
    return(<>
        <form onSubmit={handleSubmit} >
                <h2>פרטי התרומה</h2>
                    <InputText id="inputtext" placeholder="שם התורם" ref={donorNameRef} /><br/>
                    <InputText type="number" id="inputtext" placeholder="סכום התרומה"  ref={sumRef} required/>
              
                <div className="flex flex-column gap-3" id="paymentType">
                    <label className="labelOption" htmlFor="inputtext">אמצעי תשלום </label>
                    {categories.map((category) => {
                        return (
                            <div key={category.key} className="flex align-items-center" >
                                <RadioButton inputId={category.key} name="category" value={category}    onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                                <label htmlFor={category.key} className="ml-2">{category.name}</label>
                            </div>
                        );
                    })}
                </div>
                
                 {/* <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">אמצעי תשלום</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="מזומן"
                name="radio-buttons-group"
            >
            <FormControlLabel value="מזומן" control={<Radio />} label="מזומן" onClick={()=>setSelectedCategory(value)}/>
            <FormControlLabel value="צק" control={<Radio />} label="צק" onClick={()=>setSelectedCategory(value)}/>
            <FormControlLabel value="אשראי" control={<Radio />} label="אשראי" onClick={()=>setSelectedCategory(value)}/>
            </RadioGroup>
            </FormControl> 
            {console.log("מזומן",selectedCategory)}
                 */}
                <br/>
                <label className="labelOption">מעוניינת בקבלה סעיף 46</label><br/>
                <SelectButton value={value} onChange={(e) => recepie(e)} options={options} onClick={(e)=>recepie(e)}   ref={isRecepieRef} /><br/>
                {
                    isChek&&<p>גשי עם הצק לגיזברות בימים:    בין השעות:</p>
                }
                {               
                    isRecepie&&<>
                    <InputText id="inputtext" placeholder="על שם מי הקבלה" ref={recepieNameRef} />
                    </>
                }
                <br/>
                {/* <Button type="submit" label="הכנס תרומה" className="p-button-raised p-button-secondary"  /><br/> */}
                {/* <Button type="submit" label="הכנס תרומה" className="p-button-raised p-button-secondary"  onClick={()=>saveDetails()}/><br/> */}

                <Button type="button" label="הכנס תרומה" className="p-button-raised p-button-secondary" onClick={()=>setIsEnterDonation(true)}/><br/>
                {isEnterDonation&&
                <div>
                    <p>האם את בטוחה שברצונך להכניס את התרומה שהזנת?</p>
                <Button type="submit" label="אישור" className="p-button-raised p-button-secondary"  /><br/>
                <Button label="ביטול " className="p-button-raised p-button-secondary" onClick={()=>setIsEnterDonation(false)}/><br/>
                </div>
                }
                <Button label="סיימתי לעדכן" className="p-button-raised p-button-secondary" onClick={(e)=>{navigate("/points")}}/>
              
        </form>  
        </>)
}


