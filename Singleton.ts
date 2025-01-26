/**
 * How to implement Singleton? 
 * 
 * 1. Make the constructor private
 * 2. Create a static method who calls the private 
 * constructor and save the instance in a static variable
 */

class SingletonTs {
    private static instance: SingletonTs;
    private version: string;

    private constructor(version: string) {
        this.version = version;
    }

    static getInstance(version: string): SingletonTs {
        if (!SingletonTs.instance) {
            SingletonTs.instance = new SingletonTs(version);
        }
        return SingletonTs.instance;
    }
}

function appSingletonTs() {
    const singleton1 = SingletonTs.getInstance('1.0.0');
    const singleton2 = SingletonTs.getInstance('2.0.0');

    console.log(singleton1 === singleton2);
}

appSingletonTs();