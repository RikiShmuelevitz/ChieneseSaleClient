import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import '../csses/donationForm.css'
import { RadioButton } from "primereact/radiobutton";
import Gifts from "./gifts";
import { Button } from 'primereact/button';


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
            <label style={{direction:"rtl"}}>פרטי תורם</label>
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
                  {/* <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">אמצעי תשלום</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="מזומן"
                name="radio-buttons-group"
            >
            <FormControlLabel value="מזומן" control={<Radio />} label="מזומן" />
            <FormControlLabel value="צק" control={<Radio />} label="צק" />
            <FormControlLabel value="אשראי" control={<Radio />} label="אשראי" />
            </RadioGroup>
            </FormControl> */}
            <h3>פרטי אשראי</h3>
                    <InputText placeholder=" פרטי אשראי" variant="outlined" />
                    <InputText placeholder="ספרות בגב הכרטיס 3" variant="outlined" />
                    <InputText placeholder="תוקף " variant="outlined" />
                    <InputText  placeholder="תעודת זהות" variant="outlined" /><br/>
                    {!isGift&&
            <Button className="p-button-raised p-button-secondary" label="הראה מתנות" onClick={()=>setIsGift(!isGift)} ></Button>}
            {isGift&&
            <Button className="p-button-raised p-button-secondary" label="הסתר מתנות" onClick={()=>setIsGift(!isGift)} ></Button>}
            {isGift&&<Gifts/>}       
            <p>סך הכל לתשלום {sum} ש"ח</p>

        </form>    
    
    </>)
}