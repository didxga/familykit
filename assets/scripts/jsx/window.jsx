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
    ReactTransitionGroup = React.addons.TransitionGroup;

var Demo = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
      let styles = {
          root: {
              float: 'left',
              marginBottom: 24,
              marginRight: 24,
              width: 360

          },container: {
              border: 'solid 1px #d9d9d9',
              borderBottom: 'none',
              height: this.props.height,
              overflow: 'hidden'
          }};
    return (<div>
        <ReactTransitionGroup>
                <Menu>
                    <MenuItem  primaryText="Inbox" leftIcon={<ContentInbox style={{padding: 0, margiLeft:12, marginTop:12}} />} />
                    <MenuItem  primaryText="Starred" leftIcon={<ContentInbox />} />
                </Menu>
        </ReactTransitionGroup>
        <Avatar icon={<ContentInbox />} />
        </div>
    );
  }

});

module.exports = Demo;

