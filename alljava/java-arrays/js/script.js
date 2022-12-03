// Arrays
// var array = new Array();
// array[0] = "Charles";
// array[1] = 2;
// array[2] = function(name) {
//     console.log("Hello " + name);
// };
// array[3] = {course: "HTML, CSS, JS"};

// console.log(array);
// console.log(array[1]);
// array[2]("Charles");
// array[2](array[0]);
// console.log(array[3].course);

// Easier array creation
// var names = ["Charles", "Chris", "Chri"];
// console.log(names);

// for (var i = 0; i < names.length; i++) {
//     console.log("Hello " + names[i]);
// }

// names[100] = "Jim";
// for (var i = 0; i < names.length; i++) {
//     console.log("Hello " + names[i]);
// }

var names2 = ["Charles", "Chris", "Chri"];

// var myObj = {
//     name: "Charlie",
//     course: "HTML, CSS, JS",
//     platform: "Coursera"
// };
// for (var prop in myObj) {
//     console.log(prop + "; " + myObj[prop]);
// }

// for (var name in names2) {
//     console.log("Hello " + names2[name])
// }

// names2.greeting = "Hi!";
// for (var name in names2) {
//     console.log("Hello " + names2[name])
// }

// Closures
function makeMultiplier(multiplier) {
    function b() {
        console.log("Multiplier is: " + multiplier);
    }
    b();
    return (
        function(x) {
            return multiplier * x;
        }
    );
}
var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));





