/**
 * How to implement Singleton? 
 * 
 * 1. Make the constructor private
 * 2. Create a static method who calls the private 
 * constructor and save the instance in a static variable
 */

class Singleton {
    // Private constructor
    static instance = undefined; // this static variable will hold the unique instance of the class
    constructor(version) {
        this.version = version;
    }
    // Static method to get the instance
    static getInstance(version) {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(version);
        }
        return Singleton.instance;
    }
}

function appSingleton() {
    const singleton1 = Singleton.getInstance('1.0.0');
    const singleton2 = Singleton.getInstance('2.0.0');
    console.log(singleton1 === singleton2); // true
}

appSingleton();