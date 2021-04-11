const burgers = require("../models/burger.js");
const router = require("express").Router();

router.get("/", function (req, res) {
  burgers.all(function (data) {
    console.log(data);
    
    res.render("index", {burgers:data});
  });
});

router.put("/burgers/:id", function (req, res) {
  burgers.update(req.params.id, function (data) {
    console.log(data);
    res.sendStatus(200);
  });
});

router.post("/burgers", function (req, res) {
  console.log(req.body);
  burgers.create(req.body.burger_name, function (data) {
    console.log(data);
    res.redirect("/");
  });
});

module.exports = router;