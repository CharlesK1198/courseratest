(function(window) {
    var chrisGreeter = {};
    chrisGreeter.name = "Chris";
    var greeting = "Hi ";
    chrisGreeter.sayHi = function() {
        console.log(greeting + chrisGreeter.name);
    }
    window.chrisGreeter = chrisGreeter;
})(window);


