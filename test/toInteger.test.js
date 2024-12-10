import chai from "chai"
import toInteger from "../src/toInteger.js"

const expect = chai.expect

describe("Value is returned as integer", () => {
    it("Integer (3), expecting integer (3)", () =>{
        expect(toInteger(3)).to.equal(3) 
    })

    it("double (3.2), expecting integer (3)", () =>{
        expect(toInteger(3.2)).to.equal(3) 
    })
    
    it("Smallest positive, expecting (0)", () =>{
        expect(toInteger(Number.MIN_VALUE)).to.equal(0) 
    })

    it("Infinity, expecting biggest possible integer", () =>{
        expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308) 
    })

    it("string, expecting integer", () =>{
        expect(toInteger('3.2')).to.equal(3) 
    })
    
    it("Not an integer", () =>{
        expect(toInteger("a")).throw(TypeError)
    });
})