"use strict"
var React = require("react"),
    mui = require("material-ui"),
    SelectField = mui.SelectField,
    TextField = mui.TextField,
    RaisedButton = mui.RaisedButton,
    DatePicker = mui.DatePicker,
    FinActions = require('./fin_action.js'),
    View = require('react-flexbox');

var FinForm = React.createClass(
    {
        getInitialState() {
            return {
                selectValue: undefined,
            };
        },
        getStyles() {
            let styles = {
                textfield: {
                    //float: 'left',
                    //marginRight: 5
                },
                selectfield: {
                    //float:'left',
                    //marginRight: 5
                },
                datafield: {
                    marginTop: 24
                }
            };
            return styles;
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
            ];
            let style = this.getStyles();
            return (
                    <form onSubmit={this._handleSubmit}>
                    <View column style={{"margin-bottom":"10px"}}>
                    <View row style={{"justify-content": "flex-start"}}>
                    <SelectField
                            name="type"
                            ref="type"
                            value={this.state.selectValue}
                            onChange={this._handleSelectValueChange}
                            floatingLabelText="Type"
                            hintText="type"
                            menuItems={menuItems}/>
                    <TextField
                        name="amount"
                        hintText="how much money"
                        floatingLabelText="Amount" ref="amount"
                        style={{"margin-left": "15px"}}/>
                    </View>
                    <View row style={{"justify-content": "flex-start"}}>
                    <TextField
                        name="remark"
                        floatingLabelText="remark"
                        multiLine={true} ref="remark"
                        />
                    <DatePicker
                        hintText="date"
                        mode="landscape"
                        style={{"margin-left":"15px", "margin-top":"23px"}}/>
                    </View>
                    <div>
                    <RaisedButton type="submit" label="Save" />
                    </div>
                    </View>
                    </form>
            );
        }
    }
);

module.exports = FinForm;
