"use strict"
let React = require('react');
let Router = require('react-router');
let Route = Router.Route;
let Redirect = Router.Redirect;
let DefaultRoute = Router.DefaultRoute;
let Window = require("./window.jsx");;

let FinMain = require("./finance/fin_main.jsx");

let AppRoutes = (
    <Route name="window" path="/" handler={Window}>
        <Route name="fin" handler={FinMain} />
    </Route>
);
module.exports = AppRoutes;
