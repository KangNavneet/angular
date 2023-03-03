function doSomething()
{
    //Implicit 
    var username='Test' ;
    console.log(username);
}

//Explicit
var username2:String;
username2="Navneet Kang"
console.log(username2);
doSomething()

for(let i=1;i<=5;i++)
{

    console.log(i);
}

function addtion(x:number , y:number) : number
{

    return x+y ;
}

console.log("Addition :"+ addtion(5,6));