import React,{useState} from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css"; 
import { InputText } from 'primereact/inputtext';
import { RadioButton } from "primereact/radiobutton";
import { Button } from 'primereact/button';
import { InputNumber } from 'primereact/inputnumber';
import { SelectButton } from 'primereact/selectbutton';
import { useNavigate } from 'react-router-dom';  


export default function Donation(){

    const options = ['כן','לא'];
    const [value, setValue] = useState();
    const [isRecepie, setIsRecepie] = useState(false);
    const [isChek, setIsChek] = useState(false);

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
 
    return(<>
    <form>
        <div className="field col-12 md:col-4">
            <span className="p-float-label">
                            <InputText id="inputtext" />
                            <label htmlFor="inputtext">שם התורם</label>
            </span><br/>
            <span className="p-float-label">
                            <InputText type="number" id="inputtext"   />
                            <label htmlFor="inputtext">סכום התרומה</label>
            </span>
          
            <div className="flex flex-column gap-3">
                <label htmlFor="inputtext">אמצעי תשלום </label>
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center">
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </div>
                    );
                })}
            </div>
            <label>מעוניינת בקבלה סעיף 46</label><br/><br/>
            <SelectButton value={value} onChange={(e) => recepie(e)} options={options} onClick={console.log(value)}/><br/>
            {
                isChek&&<p>גשי עם הצק לגיזברות בימים:    בין השעות:</p>
            }
            {console.log("isRecepie: ",isRecepie)}
            {               
                isRecepie&&<span className="p-float-label">
                <InputText id="inputtext" />
                <label htmlFor="inputtext">על שם מי הקבלה</label>
                </span>
            }

            <Button label="עדכן תרומה" className="p-button-raised p-button-secondary"  /><br/>
            <Button label="סיימתי לעדכן" className="p-button-raised p-button-secondary" onClick={()=>{navigate("/points")}} />
            
        </div>
    </form>  
    </>)
}


