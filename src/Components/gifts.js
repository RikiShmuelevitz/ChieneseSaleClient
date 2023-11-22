import React from "react";
import Gift from "./gift";
import { Table } from "@mui/material";

export default function Gifts(){

    const gifts=[
        {name:"שרשרת יוקרתית",giftId:438,price:10,amount:0},
        {name:"מקפיא",giftId:439,price:20,amount:0},
        {name:"מזגן איכותי",giftId:440,price:30,amount:0},
        {name:"מיבש",giftId:441,price:20,amount:0}
    ];

    return(<>
    <Table>
        <tr>
          <th>שם המוצר</th>
          <th>קוד</th>
          <th>מחיר</th>
          <th>כמות</th>
        </tr>
        {gifts?.map((v,i)=>(
            <Gift name={v.name} giftId={v.giftId} price={v.price} />  
        ))}
    </Table>       
    </>)
}
