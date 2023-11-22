export function addStudent(student){
    //debugger
    return {type:'addStudent', payload:student}
}

export function getStudentbyId(studentId){
    return {type:'getStudentbyId', payload:studentId}
}

export function getStudentbyPassword(studentPassword){
    return {type:'getStudentbyPassword', payload:studentPassword}
}

export function getAllStudents(data){
    return {type:'initStudents', payload:data}
}

export function setStudentsAmount(studentId,amount){
    return {type:'updateStusentsAmount', payload:{studentId:studentId,amount:amount}}
}
export function setSCurrentStudent(studentId){
    return {type:'setSCurrentStudent', payload:studentId}
}