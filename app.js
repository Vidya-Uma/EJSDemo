var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
   res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love",{thingvar: thing});
});

app.get("/post", function(req, res){
    var posts = [
       {
         title:'datastructure', 
         authour:'Vid'
      },
      {
         title:'unix',
         authour:'Vidya'
      }
    ];
    res.render("posts", {posts:posts});
});

app.get('/*', function(req, res){
   res.redirect('/');
});

app.listen(3000, function(req, res){
   console.log("server started");
});