const request = require("supertest");
const app = require("@root/app.js");

const url = "/api/v1/user";

describe("User API", function () {
  it("should show all users", async () => {
    const res = await request(app).get(`${url}/`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("result");
  });
});
