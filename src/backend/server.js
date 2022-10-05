const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { Schema } = mongoose;
const app = express();
const bodyParser = require("body-parser");
const PORT = 5000;
const { body, validationResult } = require("express-validator");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
mongoose.connect(
  "mongodb+srv://AytacSafarova:Hesabim12@cluster0.dtlbfba.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const userSchema = new Schema({
  name: String,
  surname: String,
  email:String,
  status: Boolean,
});

const User = mongoose.model("User", userSchema);

app.post("/users", (req, res) => {
  var user = new User({
    name: req.body.name,
    // bd:req.body.bd,
    surname: req.body.surname,
    email:req.body.email,
    status: true,
  });
  user.save();
  res.send(user);
});

app.get("/users", (req, res) => {
  User.find({}, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(500).json(err);
    }
  });
});

app.get("/users/:id", (req, res) => {
  let id = req.params.id;

  User.findById(id, (err, doc) => {
    if (!err) {
      if (doc) res.json(doc);
      else res.status(404).json({ message: "Not found!" });
    } else {
      res.status(500).json(err);
    }
  });
});
app.delete("/users/:id", (req, res) => {
  let id = req.params.id;
  User.findByIdAndDelete(id, (err) => {
    if (!err) res.json({ message: "Success!" });
    else res.status(500).json(err);
  });
});
app.put('/users/:id', (req, res) => {

    let id = req.params.id;

    User.findByIdAndUpdate(id, req.body, (err, doc) => {
        if (!err) {
            res.json({ 'message': 'success' });
        }
        else {
            res.status(500).json(err);
        }
    })

})

app.listen(PORT, () => {
  console.log(`Server listening on`);
});
