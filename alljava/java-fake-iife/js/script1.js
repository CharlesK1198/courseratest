(function(window) {
    var charlesGreeter = {};
    charlesGreeter.name = "Charles";
    var greeting = "Hello ";
    charlesGreeter.sayHello = function() {
        console.log(greeting + charlesGreeter.name);
    }
    window.charlesGreeter = charlesGreeter;
})(window);