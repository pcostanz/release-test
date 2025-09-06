// Example API test file for testing
// This file will trigger 'testing' label when modified

const request = require("supertest");
const app = require("../src/api/example");

describe("API Tests", () => {
  test("GET /api/health should return 200", async () => {
    const response = await request(app).get("/api/health").expect(200);

    expect(response.body.status).toBe("ok");
    expect(response.body.timestamp).toBeDefined();
  });

  test("GET /api/users should return empty array", async () => {
    const response = await request(app).get("/api/users").expect(200);

    expect(response.body.users).toEqual([]);
  });
});
