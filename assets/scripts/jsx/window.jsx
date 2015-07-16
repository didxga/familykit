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
    FinForm = require("./finance/fin_form.jsx"),
    Container = require("./Container.jsx");

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
    return (
        <ReactTransitionGroup>
            <Container>
            <FinForm />
            </Container>
        </ReactTransitionGroup>
    );
  }

});

module.exports = Demo;

