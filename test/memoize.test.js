import chai from "chai"
import memoize from "../src/memoize.js"
import add from "../src/add.js"

const expect = chai.expect
//const should = chai.should

describe("memoize", () => {
    it("memoize is called with wrong variables", () => {
        var a = "A"
        var b = "B"
        expect(memoize(a, b)).Throw(new TypeError('Expected a function'))
    })
    
    it("function is called with function", () => {
        expect(memoize(add(3,4),add(6,5))).to.equal(add(3,4))
    })
    ;
})