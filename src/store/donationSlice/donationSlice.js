import { produce } from "immer";
 const initialState={
    donationsList:[ 
        {donationId:1,studentId:123,MOP:"רות",donorName:"אברהם",Recepies:" ",sum:0}
  
    ]


    
    
 }

 export const donationReducer=produce((state=initialState,action)=>{
    switch(action.type){
       case 'addDonation':
        state.donationsList?.push(action.payload)
        console.log("donationList: ",state.donationsList[1])

        break;
       
         
        default:
            return state;

    }
 },initialState)
