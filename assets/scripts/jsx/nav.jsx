"use strict"
var React = require('react'),
    mui = require("material-ui"),
    MenuItem = mui.MenuItem,
    LeftNav = mui.LeftNav,
    Router = require('react-router');

var Nav = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    _change: function(e, key, payload) {
        this.context.router.transitionTo(payload.route);
    },
    render: function() {
       let menuItems = [
            { route: 'fin', text: 'Finance' },
            { route: 'plan', text: 'Plan' },
            { route: 'memo', text: 'Memo' },
           { route: 'photo', text: 'Photo' }
        ];
        return (<LeftNav ref="leftNav" menuItems={menuItems} onChange={this._change}/>);
    }
});

module.exports = Nav;
