// ******************************************************************************
// *** Dependencies
// =============================================================
// var sslRedirect = require('heroku-ssl-redirect');
var express = require("express");
// Sets up the Express App
// =============================================================
var app = express();

var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./server/models");
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static(__dirname + '/public/'));

// app.use(sslRedirect());
// Routes
// =============================================================
require("./routes/html-Routes")(app);
require("./routes/chef-api-routes.js")(app);
require("./routes/recipes-api-routes.js")(app);
require("./routes/comment-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});