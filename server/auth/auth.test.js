const request = require("supertest");
const app = require("@root/app.js");

const url = "/api/v1/auth";

describe("Auth API", function () {
  it("should login admin user", async () => {
    await request(app)
      .post(`${url}/`)
      .set("Content-type", "application/json")
      .send({ username: "admin@admin.admin", password: "123456789" })
      .then((res) => {
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty("token");
      });
  });
});
