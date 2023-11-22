import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import '../csses/donationForm.css'
import { RadioButton } from "primereact/radiobutton";
import Gifts from "./gifts";
import { Button } from "@mui/material";

export default function DonationForm(){

    const[isGift,setIsGift]=useState(false)
    const[sum,setSum]=useState(0)
    const categories = [
        { name: 'מזומן', key: 'A' },
        { name: 'צק לפקודת קרן הכנסת כלה', key: 'M' },
        { name: 'אשראי', key: 'P' }
    ];
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const isGiftOpen =()=>{

    }
    return(<>
        <form>
            <InputText placeholder="שם פרטי"></InputText>
            <InputText placeholder="שם משפחה"></InputText>
            <InputText placeholder="כתובת"></InputText>
            <InputText placeholder="טלפון"></InputText>
            <InputText placeholder="טלפון נוסף"></InputText>
            <div className="flex flex-column gap-3" id="paymentType">
                <label className="labelOption" htmlFor="inputtext">אמצעי תשלום </label>
                {categories.map((category) => {
                    return (
                        <div key={category.key} className="flex align-items-center" >
                            <RadioButton inputId={category.key} name="category" value={category} onChange={(e) => setSelectedCategory(e.value)} checked={selectedCategory.key === category.key} />
                            <label htmlFor={category.key} className="ml-2">{category.name}</label>
                        </div>
                    );
                })}
            </div><br/>
            {!isGift&&
            <Button onClick={()=>setIsGift(!isGift)} >הראה מתנות</Button>}
            {isGift&&
            <Button onClick={()=>setIsGift(!isGift)} >הסתר מתנות</Button>}
            {isGift&&<Gifts/>}       
            <p>סך הכל לתשלום {sum} ש"ח</p>

        </form>    
    
    </>)
}