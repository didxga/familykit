"use strict"
var React = require("react"),
    mui = require("material-ui"),
    SelectField = mui.SelectField,
    TextField = mui.TextField,
    RaisedButton = mui.RaisedButton,
    FinActions = require('./fin_action.js'),
    FinForm = require("./fin_form.jsx"),
    View = require('react-flexbox'),
    Table = mui.Table,
    AppBar = mui.AppBar,
    FlatButton = mui.FlatButton,
    FinActions = require('./fin_action.js'),
    Dialog = mui.Dialog;

var FinMain = React.createClass(
    {
        getInitialState() {
            this._initFinForm();
            return {
                    fixedHeader: true,
                    fixedFooter: true,
                    stripedRows: true,
                    showRowHover: true,
                    selectable: true,
                    multiSelectable: false,
                    canSelectAll: true,
                    deselectOnClickaway: true,
                    height: '300px',
                    rowData:[]
            };
        },
        _initFinForm: function() {
            var that = this;
            FinActions.getTransfer(function(trans) {
                var re = [];
                trans.forEach(function(item, index, array){
                    re.push({type: {content: item.type}, amount: {content: item.amount}, remark: {content: item.remark}});
                });
                that.setState({rowData:re});
            });
        },
        _onRowSelection: function() {

        },
        _onAddTran: function() {
            this.refs.transform._handleSubmit();
        },
        _onAppBarButtonTouch: function() {
            alert("tap")
        },
        _onAppBarRightButtonTouch: function() {
            this.refs.addFinDialog.show();
        },
        render: function() {
            let headerCols = {
                type: {
                    content: 'Type',
                    tooltip: 'The Type'
                },
                amount: {
                    content: 'Amount',
                    tooltip: 'The amount'
                },
                remark: {
                    content: 'Remark',
                    tooltip: 'The Remark'
                }
            };
            let colOrder = ['type', 'amount', 'remark'];
// Footer column content can also be specified as [ 'ID', 'Name', 'Status'].
            let footerCols = {type: {content: 'Type'}, amount: {content: 'Amount'}, remark: {content: 'Remark'}};
            let customActions = [
                <FlatButton
                    key={1}
                    label="Cancel"
                    secondary={true}
                    />,
                <FlatButton
                    key={2}
                    label="Submit"
                    onClick={this._onAddTran}
                    primary={true}
                     />
            ];
            return (
                <div>
                    <View column auto>
                        <div>
                            <AppBar
                                title="Finance"
                                onLeftIconButtonTouchTap={this._onAppBarButtonTouch}
                                iconElementRight={<FlatButton label="Add" onClick={this._onAppBarRightButtonTouch}/>} >
                            </AppBar>
                        </div>
                        <div>
                            <Table
                                headerColumns={headerCols}
                                footerColumns={footerCols}
                                columnOrder={colOrder}
                                rowData={this.state.rowData}
                                height={this.state.height}
                                fixedHeader={this.state.fixedHeader}
                                fixedFooter={this.state.fixedFooter}
                                stripedRows={this.state.stripedRows}
                                showRowHover={this.state.showRowHover}
                                selectable={this.state.selectable}
                                multiSelectable={this.state.multiSelectable}
                                canSelectAll={this.state.canSelectAll}
                                deselectOnClickaway={this.state.deselectOnClickaway}
                                onRowSelection={this._onRowSelection} />
                        </div>
                    </View>
                    <Dialog
                        ref="addFinDialog"
                        title="Add new"
                        actions={customActions}
                        modal={this.state.modal}>
                        <FinForm ref="transform"/>.
                    </Dialog>
                </div>
            );
        }
    }
);

module.exports = FinMain;
