"use strict";
exports.__esModule = true;
var Circle = /** @class */ (function () {
    function Circle(radius) {
        var _this = this;
        this.getArea = function () { return Math.PI * Math.pow(_this.radius, 2); };
        this.firstArea = function () { return "Di\u1EC7n t\u00EDch \u0111\u1EA7u l\u00E0 ".concat(_this.getArea(), " "); };
        this.radius = radius;
    }
    Circle.prototype.resize = function (percent) {
        var newArea = 0;
        return newArea = this.getArea() * percent / 100;
    };
    return Circle;
}());
var circle = new Circle(40);
console.log(circle.firstArea());
console.log("Di\u1EC7n t\u00EDch sau l\u00E0 ".concat(circle.resize(50)));
