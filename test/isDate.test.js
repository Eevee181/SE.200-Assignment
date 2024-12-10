import chai from "chai"
import isDate from "../src/isDate.js"

const expect = chai.expect

describe("isDate", ()=>{
    it("return true for Date object", ()=>{
        const date = new Date();
        expect(isDate(date)).to.equal(true); 
    })

    it("return true for Date object", ()=>{
        const date = new Date("2024-08-24");
        expect(isDate(date)).to.equal(true); 
    })

    it("return false for a string", ()=>{
        expect(isDate("Mon December 02 2024")).to.equal(false);
    })

    it("return false for a number", ()=>{
        expect(isDate(42)).to.equal(false);
    })

    it("return false for an object", ()=>{
        const obj = {}
        expect(isDate(obj)).to.equal(false);
    })

    it("return false for null", ()=>{
        expect(isDate(null)).to.equal(false);
    })

    it("return false for an array", ()=>{
        const arr = []
        expect(isDate(arr)).to.equal(false);
    })

    it("return false for a custom class", ()=>{
       class CustomClass {}
       const customInstance = new CustomClass();
        expect(isDate(customInstance)).to.equal(false);
    })
})