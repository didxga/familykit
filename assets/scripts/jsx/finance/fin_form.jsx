"use strict"
var React = require("react"),
    mui = require("material-ui"),
    SelectField = mui.SelectField,
    TextField = mui.TextField,
    RaisedButton = mui.RaisedButton,
    FinActions = require('./fin_action.js');

var FinForm = React.createClass(
    {
        getInitialState() {
            return {
                selectValue: undefined,
            };
        },
        _handleSubmit: function(event) {
            event.preventDefault();
            var moneyTransaction = {
                type:this.state.selectValue,
                amount:this.refs.amount.getValue(),
                remark:this.refs.remark.getValue()
            };
            FinActions.transferMoney(moneyTransaction);
        },
        _handleSelectValueChange: function(e){
            this.setState({
                selectValue: e.target.value
            });
        },
        render: function() {
            let menuItems = [
                { bit: '1', text: 'Deposit' },
                { bit: '2', text: 'Withdraw' },
            ]
            return (
                <div>
                    <form onSubmit={this._handleSubmit}>
                    <SelectField
                        name="type"
                        ref="type"
                    value={this.state.selectValue}
                        onChange={this._handleSelectValueChange}
                    floatingLabelText="Type"
                    hintText="type"
                    menuItems={menuItems}/>
                    <br />
                    <TextField
                        name="amount"
                        hintText="how much money"
                        floatingLabelText="Amount" ref="amount"/>
                    <br />
                    <TextField
                        name="remark"
                        hintText="remark"
                        multiLine={true} ref="remark"/>
                    <br />
                    <RaisedButton type="submit" label="Save" />
                    </form>
                </div>
            );
        }
    }
);

module.exports = FinForm;
