const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/ApiS.js"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/adventuring", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});



app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});