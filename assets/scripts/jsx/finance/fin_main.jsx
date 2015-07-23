var React = require("react"),
    mui = require("material-ui"),
    SelectField = mui.SelectField,
    TextField = mui.TextField,
    RaisedButton = mui.RaisedButton,
    FinActions = require('./fin_action.js');

var FinMain = React.createClass(
    {
        getInitialState() {
            return {
                //selectValue: undefined,
            };
        },
        render: function() {
            return (
                <div>
                </div>
            );
        }
    }
);

module.exports = FinForm;
