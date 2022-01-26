const { connectDB } = require("../../loaders/mongodb");
const envPath = __dirname + "/../../../.env";
require("dotenv").config({ path: envPath });

test("Successful connection to database", () => {
  connectDB();
});
