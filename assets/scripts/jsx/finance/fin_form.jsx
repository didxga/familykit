"use strict"
var React = require("react"),
    mui = require("material-ui"),
    SelectField = mui.SelectField,
    TextField = mui.TextField,
    RaisedButton = mui.RaisedButton,
    Formsy = require('formsy-react');

var FinForm = React.createClass(
    {
        getInitialState() {
            return {
                selectValue: undefined,
            };
        },
        _handleSubmit: function(model) {
          alert(model.type);
        },
        render: function() {
            let menuItems = [
                { payload: '1', text: 'Deposit' },
                { payload: '2', text: 'Withdraw' },
            ]
            return (
                <div>
                    <Formsy.Form onValidSubmit={this._handleSubmit}>
                    <SelectField
                        name="type"
                    value={this.state.selectValue}
                    floatingLabelText="Type"
                    hintText="type"
                    menuItems={menuItems}/>
                    <br />
                    <TextField
                        name="amount"
                        hintText="how much money"
                        floatingLabelText="Amount" required/>
                    <br />
                    <TextField
                        name="remark"
                        hintText="remark"
                        multiLine={true} required/>
                    <br />
                    <RaisedButton type="submit" label="Save" />
                    </Formsy.Form>
                </div>
            );
        }
    }
);

module.exports = FinForm;
