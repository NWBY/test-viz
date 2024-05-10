const express = require("express"),
  app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const rnd = (Math.random() + 1).toString(36).substring(7);

app.get("/", (req, res) => res.send(`Dockerizing Node Application: ${rnd}`));
app.get("/yo", (req, res) => res.send("Yo yo yo!!"));

app.listen(5000, () =>
  console.log(`⚡️[bootup]: Server is running at port: 5000`)
);
