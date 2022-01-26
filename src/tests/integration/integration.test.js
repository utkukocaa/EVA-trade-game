const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../../app");

beforeAll(() => {
  jest.setTimeout(20000);
});

describe("POST /api/v1/users/buy/:userId", () => {
  describe("check user is registered", () => {
    test("should response Bad Request with 400 status code", async () => {
      const randomId = new mongoose.Types.ObjectId();
      const response = await request(app)
        .post(`/api/v1/users/buy/${randomId}`)
        .send({
          name: "UUU",
          count: 30,
        });
      expect(response.statusCode).toEqual(400);
    });

    describe("check share is registered", () => {
      test("should response Bad Request with 400 status code", async () => {
        const existedUserId = "61f061a267584220fab2631c";
        const randomShare = "XXX";
        const response = await request(app)
          .post(`/api/v1/users/buy/${existedUserId}`)
          .send({
            name: randomShare,
            count: 10,
          });
        expect(response.statusCode).toEqual(400);
      });
    });
  });
});

describe("POST /api/v1/users/sell/:userId", () => {
  describe("check share is sufficient", () => {
    test("should response Bad Request with 400 status code", async () => {
      const existedUserId = "61f061a267584220fab2631c";
      const existedShare = "UUU";
      const response = await request(app)
        .post(`/api/v1/users/sell/${existedUserId}`)
        .send({
          name: existedShare,
          count: 10000,
        });
      expect(response.statusCode).toEqual(400);
    });
    test("should response successful with 201 status code", async () => {
      const existedUserId = "61f061a267584220fab2631c";
      const existedShare = "UUU";
      const response = await request(app)
        .post(`/api/v1/users/sell/${existedUserId}`)
        .send({
          name: existedShare,
          count: 1,
        });
      expect(response.statusCode).toEqual(201);
    });
  });
});
