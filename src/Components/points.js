import React, { useState } from "react";

export default function Points(){

    const [points,setPoints]=useState(0);
    return(<>
    <h1>עד כה צברת {points} נקודות!!!</h1>      
    </>)
}
