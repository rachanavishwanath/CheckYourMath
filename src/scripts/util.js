const Util = {
    randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([0, Math.cos(deg)], length);
    },
    scale(vec, m) {
        return [0, vec[1]* m]
    }
}

Util.inherits = function(childClass, parentClass) {
    function Surrogate() {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.construtor = childClass;
}

module.exports = Util;