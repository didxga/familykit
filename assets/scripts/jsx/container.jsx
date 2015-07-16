"use strict"
var React = require("react"),
    mui = require("material-ui")

var Container = React.createClass({
    getStyles: function() {
        return {
            margin: "0 auto",
            width: "500px"
        };
    },
    render: function() {
        let styles = this.getStyles();
        return (
            <div style={styles}>
                {this.props.children}
            </div>
        );
    }
});

module.exports=Container;
