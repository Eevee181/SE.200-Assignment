import chai from "chai"
import map from "../src/map.js"

const expect = chai.expect

describe("Map", ()=>{
    it("handle normal case, input array and iteratee", ()=>{
        const input = [4, 8];
        const square = (n) => n*n; 
        expect(map(input, square)).to.deep.equal([16, 64]); 
    })

    it("handle empty array,", ()=>{
        const input = [];
        const square = (n) => n*n; 
        expect(map(input, square)).to.deep.equal([]); 
    })

    it("handle single-element arrey", ()=>{
        const input = [5];
        const iteratee = (n) => n + 2; 
        expect(map(input, iteratee)).to.deep.equal([7]); 
    })

    it("handle non-function input/iteratee", ()=>{
        const input = [1, 2, 3];
        expect(map(input, null)).to.deep.equal([null, null, null]); 

        const iteratee = (n) => n + 2;
        expect(map(null, iteratee)).to.deep.equal([]); 
    })

    it("handle undefined input", ()=>{
        const square = (n) => n*n; 
        expect(map(undefined, square)).to.deep.equal([]); 
    })

})