// var string = "Hello";
// console.log(string);
//
// var mixedString = 'A "ABC" xyz';
// console.log(mixedString);
//
// var rev = " ";
// for (var i = string.length-1; i>=0; i--) {
//   rev = rev + string[i];
// }
// console.log(rev);
//
//
// const name = 'abc';
// const lname = `xyz, ${name}`; //joining string
// console.log(lname);
//
// const str = '123';
// const num = Number(str);
// console.log(typeof num); //typecast
//
// const num2 = 123;
// const str2 = num2.toString();
// console.log(typeof str2);//typecast
//
// const search = 'Chrome';
//
// if (search.includes('chro')) {
//   console.log("chro present");
// }
// else {
//   console.log("not presents");
// }
//
// console.log(search.slice(2));
//
// console.log(search.toLowerCase());


// let newString = "JavaScript is scripting langugae ";
// let word = 'is';
//
// console.log(newString.includes(word));
// console.log(`the word "${word}" ${newString.includes(word)  ? 'is' : 'is not'} in the sentence`);
//

// let string = "give rupees 1000";
// let amount = Number.parseInt(string.slice('give rupees '.length));
// console.log(amount);
// console.log(typeof amount);

// let str = '2+3';
// let str2 = new String('2+2');
// console.log(str);
// console.log(str2);
// eval(str);
// eval(str2)

let arrin = [3, 6, 8];
// let arrin.foo = "hi";

for(let i in arrin){
  console.log(i);
}

for(let i of arrin){
  console.log(i);
}
