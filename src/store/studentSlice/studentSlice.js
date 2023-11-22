import { produce } from "immer";
 const initialState={
    studentsList:[ 
        {studentId:123,lastName:"shir",firstName:"rachel",classId:"11",password:"1234",studentAmount:0},
        {studentId:124,lastName:"shir",firstName:"shira",classId:"11",password:"123",studentAmount:0},
        {studentId:125,lastName:"shalom",firstName:"rut",classId:"12",password:"12",studentAmount:0},


    ],
    currentStudent:{studentId:0,lastName:" ",firstName:" ",classId:" ",password:" ",studentAmount:0}


    
    
 }

 export const studenReducer=produce((state=initialState,action)=>{
    switch(action.type){
       case 'addStudent':
        state.studentsList.push(action.payload)
        break;
        case 'getStudentbyId':
        let student=state.studentsList?.find(s=>s.studentId==action.payload )
        return student;
        case 'getStudentbyPassword':
        let stud=state.studentsList?.find(s=>s.password==action.payload )
        if(stud==null)
        return false
        return true;
        case 'initStudents':
           state.studentsList=action.payload;
           break;
        case 'setStudentsAmount':
        state.studentsList[action.payload.studentId].studentAmount+=action.payload.num 
        break;
        case 'setSCurrentStudent':
            state.currentStudent=state.studentsList?.find(s=>s.studentId==action.payload )

            
         
        default:
            return state;

    }
 },initialState)
