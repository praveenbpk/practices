//_____-“check if two strings are anagrams javascript” ----
/*function myfun (a,b){
    if(a.length!=b.length){
    return false;}
var  str1 = a.split('').sort().join('');
var  str2 = b.split('').sort().join('');
var result = (str1===str2)
    return result;
}
document.write(myfun("listen","ilsnet"));*/
//-------->javascript program to remove duplicate from an array without inbuild setmethod------------->
/*let birds = ["crow","peacock","parrot","sparrow","peacock"];
let b = [];
birds.forEach((flys) =>{
    if(!b.includes(flys)){
        b.push(flys);
    }
});
console.log(b);*/
/*function calculator(x,y){
    let r=x%y;
    while(r!=0){
        x=y;
        y=r;
        r=x%y;
    }
    document.write(y)
}

calculator(10,3);*/

//------fibinous series-----//
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i < number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
