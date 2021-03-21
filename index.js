var fruit={
    name:'Oranges',
    quantity:2,
    price:30.00
    }
   console.log(fruit.quantity+ " "+fruit.name+ " for KES "+fruit.price*fruit.quantity)


// Exapmles of object,method and function:
//Object
var person={
    name:"Pamera",
    age:23,
    skinColour:"Black",
    introduction: function(){
      return this.name +" "+ this.age;  
    }
    
}
console.log(person.introduction());
console.log(person.name);
console.log(person.skinColour);

// function
function subs(a,b){
    console.log(a-b);
}
subs(20,10);





   