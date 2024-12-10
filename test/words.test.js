import chai from "chai"
import words from "../src/words.js"

const expect = chai.expect

describe("sentence or sequence is splitted to an array", () => {
    it("Sentence is splitted, array doesn't contain other than words", () =>{
        expect(words('fred, barney, & pebbles')).to.deep.equal(['fred', 'barney', 'pebbles']) 
    })

    it("Sentence is splitted, array contains extra characters", () =>{
        expect(words('fred, barney, & pebbles',  /[^, ]+/g)).to.deep.equal(['fred', 'barney', '&', 'pebbles']) 
    })

    it("only one word", () => {
        expect(words('hello')).to.deep.equal(['hello'])
    })

    it("only character", () => {
        expect(words('&')).to.deep.equal([])
    })
})