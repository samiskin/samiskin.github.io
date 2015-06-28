
var HelloWorld = require('HelloWorld.jsx');

var Router = require('react-router');
var Route = Router.Route;

var routes = (
    <Route handler={HelloWorld}/>
);

module.exports = Router.create({
    routes: routes,
    location: Router.HistoryLocation
});