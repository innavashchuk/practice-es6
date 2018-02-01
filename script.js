//ES5
/*var name5 = 'Jane Smith';
 var age5 = 23;
 name5 = 'Jane Miller';
 console.log(name5);

 //ES6
 const name6 = 'Jane Smith';
 let age6 = 23;
 name6 = 'Jane Miller';
 console.log(name6);*/

//ES5
function driverLicense5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = '1990';
        console.log(firstName + ' born in ' + yearOfBirth + ', is now officially allowed to drive a car');
    }
}

driverLicense5(true);

//ES6
function driverLicense6(passedTest) {
    let firstName;
    const yearOfBirth = '1990';
    if (passedTest) {
        firstName = 'John';
    }
    console.log(firstName + ' born in ' + yearOfBirth + ', is now officially allowed to drive a car');
}

driverLicense6(true);

//Block and IIFEs
//ES6
{
    const a = 1;
    let b = 2;
}
console.log(a + b);

//ES5
(function () {
    var c = 3;
})();

console.log(c);