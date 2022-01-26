const config = require("./config");
const express = require("express");
const loaders = require("./loaders");
const notFound = require("./middlewares/notFound");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const { userRouter, shareRouter } = require("./routes");
const app = express();
const PORT = process.env.PORT || 5000;

config();
loaders();

//middlewares
app.use(express.json());
app.use("/api/v1/users", userRouter);
app.use("/api/v1/share", shareRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});

module.exports = app;
