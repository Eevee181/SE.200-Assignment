import chai from "chai"
import filter from "../src/filter.js"

const expect = chai.expect

describe("Filter", ()=>{
    it("return empty array when input is an empty array", ()=>{
        const result = filter([], () => true);
        expect(result).to.deep.equal([[]]);
    })

    it("return empty array, no elements match to value", ()=>{
        const result = filter([1, 2, 3], (n) => n > 3);
        expect(result).to.deep.equal([[]]);
    })

    it("return all elements that match with calculations", ()=>{
        const result = filter([2, 3, 4, 5], (n) => n > 3);
        expect(result).to.deep.equal([4, 5]);
    })

    it("Insert array of users, return active users", ()=>{
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred', 'active': false }
        ]

        const result = filter(users, ({ active }) => active);
        expect(result).to.deep.equal([{ 'user': 'barney', 'active': true }]);
    })

    it("handle wrong input", ()=>{
        const result1 = filter(null, () => true);
        expect(result1).to.deep.equal([[]]);

        const result2 = filter(undefined, () => true);
        expect(result2).to.deep.equal([[]]);
    })

})