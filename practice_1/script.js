function Greeter(greeting) {
    this.greeting = greeting;
}
Greeter.prototype.greet = function () {
    return 'hello' + this.greeting;
};
var greeter = new Greeter('world');
var button = document.createElement('button');
button.textContent = 'Say Hello';
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
