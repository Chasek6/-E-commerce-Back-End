const router = require("express").Router();
// const { Tag, Product, ProductTag } = require('../../models');
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});
// above is the code for the index.js file in the routes folder
// we are requiring the express package and the api folder
// we are using the router.use method to use the api folder
module.exports = router;
