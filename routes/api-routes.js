// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {
     db.Burger.findAll({}).then(function(dbBurger) {
      // We have access to the todos as an argument inside of the callback function

      console.log(dbBurger);
      res.render("index",{burgers:dbBurger});
    });
  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/burgers", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name
    }).then(function(results) {
      // `results` here would be the newly created chirp
      res.end();
    });
  });


  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id : req.params.id //this will be your id that you want to delete
      }}).then(function(todo){
        res.json(todo)
      })
  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/burgers/:id", function(req, res) {
    
    db.Burger.update(req.body,{
      where: {
        id : req.params.id
      }}).then(function(burger){
        res.json(burger);
      })
  });
};
