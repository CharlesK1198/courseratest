// Function constructors
// function Circle(radius) {
//     this.radius = radius;
// }
// Circle.prototype.getArea = function() {
//     return Math.PI * Math.pow(this.radius, 2);
// }
// var myCircle = new Circle(10); // New Object();
// console.log(myCircle.getArea());

// var myOtherCircle = new Circle(20); // Don't forget "new" keyword
// console.log(myOtherCircle);

var literalCircle = { // new Object()
    radius: 10,

    getArea: function() {
        var self = this;
        console.log(this);

        var increaseRadius = function() {
            self.radius = 20;
        };
        increaseRadius();
        console.log(this.radius);
        return Math.PI * Math.pow(this.radius, 2);
    }
};
console.log(literalCircle.getArea());