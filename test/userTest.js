var expect = require('chai').expect;
describe("Test para usuarios", function(){
     it("se denem retornar tres usuarios", function(){
        var users = ['tobi', 'tobi', 'tobi'];
       expect(users.length).to.equal(3);
     })
});