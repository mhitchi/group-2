module.exports = function (app) {

  //Landing Page View
  app.get('/', function (req, res) {
    res.render("index");
  });
  // Form View
  app.get("/form", (req, res) => {
    res.render("form");
  });
}
