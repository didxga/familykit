"use strict"
var React = require('react'),
  mui = require('material-ui'),
  ThemeManager = new mui.Styles.ThemeManager(),
    Avatar = mui.Avatar,
    List = mui.List,
    Menu = require('material-ui/lib/menus/menu'),
    MenuItem = require("material-ui/lib/menus/menu-item"),
    ListItem = mui.ListItem,
    ContentInbox = require('material-ui/lib/svg-icons/content/inbox'),
    ReactTransitionGroup = React.addons.TransitionGroup,
    Nav = require("./Nav.jsx"),
    View = require('react-flexbox'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler;

var windowLayout = React.createClass({

    getInitialState: function() {
        // a resizable sidebar could be implemented by updating this value
        return {sidebarWidth: 230}
    },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
          var scrollable = {
              'overflow-y': 'hidden',
              'overflow-x': 'hidden',
          };
    return (
               <div>
                <Nav/>
                <View row auto style={{"margin-left":270}}>
                    <RouteHandler />
                </View>
               </div>
    );
  }
});

module.exports = windowLayout;

