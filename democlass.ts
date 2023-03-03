class Person
{

    name:String ;
    age:number ;
    constructor(name:String , age:number)
    {
        this.name=name;
        this.age=age;
    }

    getName()
    {
        return this.name;
    }
}

var person:Person=new Person('Neetu' ,30);
console.log(person.name);
