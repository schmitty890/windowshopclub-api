import express from "express";
const app = express();

const PORT = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8081;

// serving static files
app.use(express.static("public"));

app.get("/test", (req, res) => {
  res.send("test route!");
});

app.get("/", (req, res) => {
  console.log(`hi on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
