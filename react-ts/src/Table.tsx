import * as React from 'react';
// import { withStyles } from 'material-ui/styles';
// import { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import './Table.css';

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
      <div className="box">
        <table>
          <tr>
            <th>Company</th>
            <th>Expense</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>ABC</td>
            <td>Printer</td>
            <td>$500.00</td>
            <td>04/21/2018</td>
            <button>Submit</button>
          </tr>
        </table>
      </div>
    );
  }
}