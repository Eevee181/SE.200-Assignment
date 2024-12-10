import chai from "chai"
import add from "../src/add.js"

const expect = chai.expect

describe("Sum", ()=> {
    it("integers (6, 4), expecting integer (10)", () => {
        expect(add(6,4)).to.equal(10)
    })

    it("variable is string, not number", () => {
        expect(add("6", 4)).to.equal(10)
    })
    
    it("variable is character, not number", () => {
        should(add('A', 4)).Throw(TypeError)
    });
})