"use strict"
var React = require('react'),
    mui = require("material-ui"),
    MenuItem = mui.MenuItem,
    LeftNav = mui.LeftNav;

var Nav = React.createClass({

    render: function() {
       let menuItems = [
            { route: 'finance', text: 'Finance' },
            { route: 'plan', text: 'Plan' },
            { route: 'memo', text: 'Memo' },
           { route: 'photo', text: 'Photo' }
        ];
        return (<LeftNav ref="leftNav" menuItems={menuItems} />);
    }
});

module.exports = Nav;
