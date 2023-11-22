import React from "react";

function Gift(props){

    const {name,giftId,price}=props;

    return(<>
       {console.log("props: ",props)}            
        <tr>
          <td>{name}</td>
          <td>{giftId}</td>
          <td>{price}</td>
          <td><input type="number"/></td>
        </tr> 
    </>)
}
export default Gift;