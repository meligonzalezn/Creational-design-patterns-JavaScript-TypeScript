/**
 * How to implement Singleton?
 *
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 * constructor and save the instance in a static variable
 */
var Singleton = /** @class */ (function () {
    function Singleton(version) {
        this.version = version;
    }
    Singleton.getInstance = function (version) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(version);
        }
        return Singleton.instance;
    };
    return Singleton;
}());
function appSingleton() {
    var singleton1 = Singleton.getInstance('v1');
    var singleton2 = Singleton.getInstance('v2');
    console.log(singleton1 === singleton2);
}
appSingleton();
