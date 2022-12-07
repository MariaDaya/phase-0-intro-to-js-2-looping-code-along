
const nameArray=[];
const names= ["Guadalupe", "Ollie", "Aki"];

function writeCards(names,event){
 for (let i=0; i<names.length ; i++){
    nameArray.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);  
 }
 return nameArray;
};

console.log(writeCards(names,'surprise'));


for (let age = 30; age < 40; age++){
   console.log(`I'm ${age} years old. Happe birthday to me!`);

};

function countDown(i){
   while  (i>=0){
      console.log(i--);
   }
};

countDown(4);