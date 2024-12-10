import chai from "chai"
import countBy from "../src/countBy.js"

const expect = chai.expect

describe("countBy", ()=>{
    it("count occurances based on iteratee", ()=>{
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
        ]

        const result = countBy(users, value => value.active);
        expect(result).to.deep.equal({ 'true': 1, 'false': 0 });
    })

    it("return empty object for an empty collection", ()=>{
        const result = countBy([], value => value.active);
        expect(result).to.deep.equal({});
    })

    it("handle counting in object collection", ()=>{
        const obj = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': false },
            { 'user': 'fred', 'active': false }
         ]

        const result = countBy(obj, value => value.active);
        expect(result).to.deep.equal({ 'true': 1, 'false': 2 });
    })

    it("handle undefined values correctly", ()=>{
        const users = [
            { 'user': 'barney', 'active': undefined },
            { 'user': 'betty', 'active': undefined },
            { 'user': 'fred', 'active': false }
         ]

        const result = countBy(users, value => value.active);
        expect(result).to.deep.equal({ 'undefined': 2, 'false': 1 });
    })

    it("handle non-function iteratees", ()=>{
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'betty', 'active': true },
            { 'user': 'fred', 'active': false }
         ]

        const result = countBy(users, value => 'constant');
        expect(result).to.deep.equal({ 'constant': 3 });
    })

    it("count occurances of different iteratees", ()=>{
        const numbers = [1,1,2,3,3,3,4]
        const result = countBy(numbers, value => value);
        expect(result).to.deep.equal({ '1': 2, '2': 1, '3': 3, '4': 1 });
    })

    
})