import * as React from 'react';
// import { withStyles } from 'material-ui/styles';
// import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

export default class Table extends React.Component  {
  constructor(props:any) {
    super(props);

    this.state = {
      date: Date.now,
      expense: props.expense,
      name: props.name
    };
  }
  public render() {
    return (
      <div>
        <table>
          <p>This is the table</p>
        </table>
      </div>
    );
  }
}