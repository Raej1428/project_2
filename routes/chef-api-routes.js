var db = require("../server/models");

module.exports = function (app) {
    app.get("/api/chef", function (req, res) {
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Recipes
        db.Chef.findAll({
            include: [db.Recipes],
        }).then(function (dbChef) {
            res.json(dbChef);
        });
    });

    app.get("/api/chef/:id", function (req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Recipes
        db.Chef.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Recipes],
        }).then(function (dbChef) {
            res.json(dbChef);
        });
    });

    app.post("/api/chef", function (req, res) {
        db.Chef.create(req.body).then(function (dbChef) {
            res.json(dbChef);
        });
    });

    app.delete("/api/chef/:id", function (req, res) {
        db.Chef.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbChef) {
            res.json(dbChef);
        });
    });

    app.put("/api/updatedChef", function (req, res) {

        db.Chef.update({
            Name: req.body.name,
            email: req.body.email
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbChef) {
            res.json(dbChef);
        });
    });

    app.put("/api/updatedChef", function (req, res) {
        db.Chef.update(
            req.body, {
            where: {
                id: req.body.id
            }
        }).then(function (dbChef) {
            res.json(dbChef);
        });
    });
};


