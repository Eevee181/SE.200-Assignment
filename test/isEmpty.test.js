import chai from "chai"
import isEmpty from "../src/isEmpty.js"

const expect = chai.expect

describe("isEmpty", ()=>{
    it("input: non-value, return: true", ()=>{
        expect(isEmpty(null)).to.equal(true); 
        expect(isEmpty(undefined)).to.equal(true); 
    })

    it("input: boolean, return: true", ()=>{
        expect(isEmpty(true)).to.equal(true); 
        expect(isEmpty(false)).to.equal(true);
    })

    it("input: 0, return: true", ()=>{
        expect(isEmpty(0)).to.equal(true); 
    })

    it("input: empty array, return: true", ()=>{
        expect(isEmpty([])).to.equal(true); 
    })

    it("input: empty string, return: true", ()=>{
        expect(isEmpty("")).to.equal(true); 
    })

    it("input: empty object, return: true", ()=>{
        expect(isEmpty({})).to.equal(true); 
    })

    it("input: non-empty array, return: false", ()=>{
        expect(isEmpty([1, 2, 3])).to.equal(false); 
    })

    it("input: non-empty string, return: false", ()=>{
        expect(isEmpty("puppy")).to.equal(false); 
    })

    it("input: object with properties, return: false", ()=>{
        expect(isEmpty({a : 1})).to.equal(false); 
    })

    it("input: empty map, return: true", ()=>{
        expect(isEmpty(new Map())).to.equal(true); 
    })

    it("input: non-empty map, return: false", ()=>{
        expect(isEmpty(new Map([[1, 'one']]))).to.equal(false); 
    })

    it("input: empty set, return: true", ()=>{
        expect(isEmpty(new Set())).to.equal(true); 
    })

    it("input: non-empty set, return: false", ()=>{
        expect(isEmpty(new Set([1, 2, 3]))).to.equal(false); 
    })

})