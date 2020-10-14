const Util = {
    randomVec(length) {
        return Util.scale([0, 5], length);
    },
    scale(vec, m) {
        return [0, vec[1]* m]
    },
    number(num) {
        return Math.round(Math.random() * num)
    }
}

Util.inherits = function(childClass, parentClass) {
    function Surrogate() {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.construtor = childClass;
}

module.exports = Util;