interface Add {
    (num1 : number, num2 : number): number;
}
const add: Add = function(a, b){
    return a  + b;
}

add(10,20);

interface IsMan{
    (gender : string) : boolean;
}

const i : IsMan = (gender) => {
    return gender == "M"
}