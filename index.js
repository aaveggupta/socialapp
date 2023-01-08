const express = require("express");
const format = require("date-format");
const app = express();
const PORT = process.env.PORT || 4000;

// Swagger docs related
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

// app.use is a middleware
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedinStats = {
    username: "aaveggupta",
    followers: 785,
    following: 643,
    date: format.asString("dd/MM/yyyy - hh:mm:ss", new Date()),
  };

  res.status(200).json({ linkedinStats });
});

app.get("/api/v1/:token", (req, res) => {
  res.status(200).json({ param: req.params.token });
});

app.listen(PORT, () => {
  console.log(`Server is running as ${PORT}`);
});
