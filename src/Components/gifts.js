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
    {/* <TableContainer component={Paper}>
        <Table sx={{ minWidth: 50 }}  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right" style={{direction:"rtl"}}>שם המוצר</TableCell>
            <TableCell align="right">קוד</TableCell>
            <TableCell align="right">מחיר</TableCell>
            <TableCell align="right">כמות</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gifts.map((gifts) => (
            <TableRow
              key={gifts.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{direction:"rtl"}} component="th" scope="row" >
                {gifts.name}
              </TableCell>
              <TableCell align="right">{gifts.giftId}</TableCell>
              <TableCell align="right">{gifts.price}</TableCell>
              <TableCell align="right">
                <input value={value} type="number" onChange={(e)=>setValue(e.target.value)}></input>
                <InputText type="number" id="inputtext" style={{width: "25%"}}/> 
                 {gifts.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> */}
    {/* <Table>
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
    <div className="card">
            <DataTable value={gifts} tableStyle={{ minWidth: '5rem' }}>
                <Column field="שם המוצר" header="שם המוצר">
                </Column>
                <Column field="קוד" header="קוד"></Column>
                <Column field="מחיר" header="מחיר"></Column>
                <Column field="כמות" header="כמות"></Column>
            </DataTable>
        </div>       */}     
    </>)
}
