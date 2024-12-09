import chai from "chai"
import words from "../src/words.js"

const expect = chai.expect

//not valid test
describe("sentence or sequence is splitted to an array", () => {
    it("Sentence is splitted, array doesn't contain other than words", () =>{
        expect(words('fred, barney, & pebbles')).to.equal(['fred', 'barney', 'pebbles']) 
    })
})