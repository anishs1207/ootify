// server.js
const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:3000", // Next.js frontend port
    credentials: true,
  })
);

app.use(express.json());

const arr = [];

app.get("/prefrences", (req, res) => {
  if (arr.length === 0) {
    res.status(200).send({ message: "No preferences found" });
  } else {
    console.log("Response mil gaya bhai");
    res.status(200).send(arr);
  }
});

app.post("/prefrences", (req, res) => {
  console.log(req.body);
  arr.push(req.body);
  res.status(200).send(arr);
});
app.put("/prefrences/:id", (req, res) => {
  const { id } = req.params;
  const { gender, occasions } = req.body;

  const user = arr.find((item) => item.id === id); 

  if (user) {
    if(gender) user.gender = gender;
    if(occasions) user.occasions = occasions;
    console.log("User updated:", user);
    return res.status(200).json(user);
  } else {
    return res.status(404).json({ message: "User not found" });
  }
});
app.get("/prefrences/:id", (req, res) => {
  const { id } = req.params;
  const user = arr.find((item) => item.id === id);
  if (user) {
    console.log("User found:", user);
    return res.status(200).json(user);
  } else {
    return res.status(404).json({ message: "User not found" });
  }
})
app.listen(3001, () => console.log("Server running on port 3001"));
