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

export function setStudentsSum(sum){
    return {type:'setStudentsSum', payload:sum}
}
export function setSCurrentStudent(studentId){
    return {type:'setSCurrentStudent', payload:studentId}
}