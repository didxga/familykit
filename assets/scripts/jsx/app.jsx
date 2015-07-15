(function () {
    "use strict"
    let React = require("react");
    let SomeAwesomeComponent =  require("./window.jsx");
    let Dispatcher = require("flux").Dispatcher;

    let injectTapEventPlugin = require("react-tap-event-plugin");

    injectTapEventPlugin();

    React.render(React.createElement(SomeAwesomeComponent), document.getElementById("mui"));

})();
