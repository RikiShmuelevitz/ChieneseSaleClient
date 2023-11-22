import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Points(){

    // const [points,setPoints]=useState(0);
    const student=useSelector((state) => state.students.currentStudent);
    let points=student.studentSum/10
    return(<>
    {points>0&&<h1>עד כה צברת {points} נקודות!!!</h1> }
    {points==0&&<h1>עוד לא צברת נקודות</h1> }
      
    </>)
}
