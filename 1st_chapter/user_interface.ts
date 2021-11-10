type Score = 'A' | 'B' | 'C' | 'F'
interface User{
    name : string;
    age : number;
    gender? : string;
    readonly birthYear : number;
    [grade : number] : Score;
}
let user : User = {
    name : 'kim',
    age : 20,
    birthYear : 2000,
    1 : 'A',
    2 : 'B',
    3 : 'C',
    4 : 'F'
    //5 : 'XX'
}


user.age = 10;
user.gender = "male" //optioinal property
//user.birthYear=1999; readonlyのせい

console.log(user.age)
