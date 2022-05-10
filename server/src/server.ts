import express from "express";

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  return res.json({ text: "Hello World" });
});

app.listen(3333, () => console.log("Server is running at port 3333 💜"));
