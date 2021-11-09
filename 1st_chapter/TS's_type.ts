//TSにはtype推論があります
let Myname:string = 'myname';
let age:number = 30;
let a:number[] = [1,2,3];
let a2:Array<string> = ['1','2','3a']
let TrueOrFalse:boolean = false;

// a2.push(1) エラーをおしえてくれる

// Tuple

let b:[string,number];
b = ['apple',1];
//b = [1,'apple']
b[0].toLowerCase();
//b[1].toLowerCase();

//void
function hello():void{
    console.log('hello');
}

//never
function showError():never{
    throw new Error(); 
}// いつもエラーを変換する時

function infloop():never{
    while(true){
        // do something
    }
}// いつになっても終わらない時

// enum
//JAVAにはいないけれど。。。
enum Countries{
    Korea = 'k',
    Japan = 1,
    Usa
}
console.log(Countries[3]);

let myCountries:Countries
myCountries=Countries.Korea

//null, undefined
let a3:null = null;
let b3:undefined = undefined;