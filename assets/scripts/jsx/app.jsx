(function () {
    "use strict"
    let React = require("react");
    let SomeAwesomeComponent =  require("./window.jsx");

    let injectTapEventPlugin = require("react-tap-event-plugin"),
        AppRoutes = require('./app-router.jsx'),
        Router = require("react-router");

    injectTapEventPlugin();
    Router
        // Runs the router, similiar to the Router.run method. You can think of it as an
        // initializer/constructor method.
        .create({
            routes: AppRoutes,
            scrollBehavior: Router.ScrollToTopBehavior
        })
        // This is our callback function, whenever the url changes it will be called again.
        // Handler: The ReactComponent class that will be rendered
        .run(function (Handler) {
            React.render(<Handler/>, document.body);
        });
})();
