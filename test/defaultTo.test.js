import chai from "chai"
import defaultTo from "../src/defaultTo.js"

const expect = chai.expect

describe("defaultTp", ()=>{
    it("Inserting defined value & default value, expecting return value as defined", ()=>{
        expect(defaultTo(1, 10)).to.equal(1); 
        expect(defaultTo(false, true)).to.equal(false); 
        expect(defaultTo("Bob", "Alice")).to.equal("Bob"); 
    })

    it("Inserting undefined value & default value, expecting return value as default", ()=>{
        expect(defaultTo(undefined, 10)).to.equal(10);  
        expect(defaultTo(undefined, "Alice")).to.equal("Alice"); 
    })

    it("Inserting null & default value, expecting return value as default", ()=>{
        expect(defaultTo(null, 10)).to.equal(10);  
        expect(defaultTo(null, "Alice")).to.equal("Alice"); 
    })
})