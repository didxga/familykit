"use strict"
var React = require("react"),
    mui = require("material-ui"),
    SelectField = mui.SelectField,
    TextField = mui.TextField,
    RaisedButton = mui.RaisedButton,
    FinActions = require('./fin_action.js'),
    FinForm = require("./fin_form.jsx"),
    View = require('react-flexbox'),
    Table = mui.Table;

var FinMain = React.createClass(
    {
        getInitialState() {
            return {
                //selectValue: undefined,
            };
        },
        _onRowSelection: function() {

        },
        render: function() {
            let rowData = [
                {selected: true, id: {content: '1'}, name: {content: 'John Smith'}, status: {content: 'Employed'}},
                {id: {content: '2'}, name: {content: 'Randal White'}, status: {content: 'Unemployed'}},
                {selected: true, id: {content: '3'}, name: {content: 'Stephanie Sanders'}, status: {content: 'Employed'}},
                {id: {content: '4'}, name: {content: 'Steve Brown'}, status: {content: 'Employed'}},
                {id: {content: '5'}, name: {content: 'Joyce Whitten'}, status: {content: 'Employed'}},
                {id: {content: '6'}, name: {content: 'Samuel Roberts'}, status: {content: 'Unemployed'}},
                {id: {content: '7'}, name: {content: 'Adam Moore'}, status: {content: 'Employed'}},
                {id: {content: '8'}, name: {content: 'Robert Brown'}, status: {content: 'Employed'}},
                {id: {content: '9'}, name: {content: 'Elizabeth Stevenson'}, status: {content: 'Employed'}},
                {id: {content: '10'}, name: {content: 'Zachary Dobb'}, status: {content: 'Employed'}},
                {id: {content: '11'}, name: {content: 'Zachary Dobb'}, status: {content: 'Employed'}}
            ];
            let headerCols = {
                id: {
                    content: 'ID',
                    tooltip: 'The ID'
                },
                name: {
                    content: 'Name',
                    tooltip: 'The name'
                },
                status: {
                    content: 'Status',
                    tooltip: 'The status'
                }
            };
            let colOrder = ['id', 'name', 'status'];
// Footer column content can also be specified as [ 'ID', 'Name', 'Status'].
            let footerCols = {id: {content: 'ID'}, name: {content: 'Name'}, status: {content: 'Status'}};

            return (
                <div>
                    <View row auto>
                        <FinForm />
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
                </div>
            );
        }
    }
);

module.exports = FinMain;
