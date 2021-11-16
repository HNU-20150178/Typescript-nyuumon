function hello(name?: String){
    return `hello, ${name || "world"}`;
}

function hello2(name = "world"){
    return `hello, ${name}`;
}

const result = hello();
const result2 = hello("yoon");

function hello3(name: String, age?: number){ 
// 上の順番で可能になる　undefinedが　後ろの方に後ろにくる
    if(age !== undefined){
        return `hello, ${name} you are ${age}`
    }else{
        return `hello, ${name}`
    }
}

const result3 = hello3("yoon",26);
const result4 = hello3("yoon");

function hello3_B(age: number|undefined, name: String){ 
    // 上の順番で可能になる　undefinedが　後ろの方に後ろにくる
        if(age !== undefined){
            return `hello, ${name} you are ${age}`
        }else{
            return `hello, ${name}`
        }
    }
const result5 = hello3_B(26,"yoon");
const result6 = hello3_B(undefined,"yoon");

function add_array(...numbers: number[]){
    return numbers.reduce((result, numbers) => result + numbers, 0);
}
add_array(1,2,3); //6
add_array(1,2,3,4,5,6,7,8,9,10); // 55

interface House{
    name : String;
}

const Apartment_A : House = {name : 'Samsung'}

function showName(this:House, price:number){
    //thisを定義する方法
    console.log(this.name, price)
}

const apartment_a = showName.bind(Apartment_A);
apartment_a(3000000);

interface Stud{
    name: string;
    age: number;
}

function addstud(name: string, age: number): User;
function addstud(name: string, age: string): string;
function addstud(name: string, age: number | string): Stud | String{
    if(typeof age === "number"){
        return {
            name,
            age
        };
    }else{
        return "insert age by using number"
    }
}

const stud1 : Stud = addstud("yoon",26);
const stud2 : Stud = addstud("kim",26);
