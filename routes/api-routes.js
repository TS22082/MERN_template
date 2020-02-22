const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/all", (req, res) => {
  db.Todo.find().then(todos => {
    res.send(todos);
  });
});

router.get("/find", (req, res) => {
  db.Todo.find({ _id: req.body.id }).then(foundTodo => {
    res.send(foundTodo);
  });
});

router.post("/new", (req, res) => {
  db.Todo.create({ text: req.body.text, complete: req.body.complete }).then(
    newTodo => {
      res.send(newTodo);
    }
  );
});

router.patch("/update", (req, res) => {
  db.Todo.findOneAndUpdate({ _id: req.body.id }, { text: req.body.text }).then(
    updatedTodo => {
      res.send({ message: "success", todo: updatedTodo });
    }
  );
});

router.delete("/delete", (req, res) => {
  db.Todo.deleteOne({ _id: req.query.id })
    .then(() => {
      res.send("success");
    })
    .catch(err => res.send(err));
});

module.exports = router;
