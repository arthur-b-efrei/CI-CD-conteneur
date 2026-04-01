const request = require("supertest");
const app = require("../server");

test("GET /health retourne 200", async () => {
  const res = await request(app).get("/health");
  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe("healthy");
});

test("GET /api/activities retourne un tableau", async () => {
  const res = await request(app).get("/api/activities");
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});
