import { getComments } from ".";

test("getComments()", (done) => {
    getComments("octocat/Hello-World", 1, (error, response) => {
        if (error) { throw new Error(error); }
        expect(response.shift().id).toBe(1340258);
        done();
    });
});
