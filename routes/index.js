module.exports = function(app) {
	require("./api-routes")(app);
	require("./html-routes")(app)
};