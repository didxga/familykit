(function () {
    "use strict"
    let React = require("react");
    let SomeAwesomeComponent =  require("./window.jsx");

    let injectTapEventPlugin = require("react-tap-event-plugin");

    injectTapEventPlugin();
    function render() {
        var appView = (
            <SomeAwesomeComponent
                width={window.innerWidth}
                height={window.innerHeight}
                />
        )
        React.render(appView, document.body)
    }
    render();
    window.addEventListener('resize', render);
})();
