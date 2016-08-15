describe("A suite is just a function", function() {
    var a;
    console.log("I'm in a test!");
    it("and so is a spec", function() {
        a = true;

        expect(a).toBe(true);
    });
});
