import chai from "chai"
import memoize from "../src/memoize.js"

const expect = chai.expect
//const should = chai.should

describe("memoize works", () => {
    it("memoize is called with wrong variables", () => {
        var a = "A"
        var b = "B"
        expect(memoize(a, b)).Throw(new TypeError('Expected a function'))
    })
})