import React,{useState} from "react";

function Gift(props){

    const {name,giftId,price}=props;
    const[value,setValue]=useState(0)

    return(<>
        <tr>
          <td>{name}</td>
          <td>{giftId}</td>
          <td>{price}</td>
          <td><input type="number" value={value} onChange={(e)=>setValue(e.target.value)}/></td>
        </tr> 
    </>)
}
export default Gift;