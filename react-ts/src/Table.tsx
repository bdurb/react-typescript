import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
import * as React from 'react';
import './Table.css';


export default class Table extends React.Component<{}, {expense: string, amount: number, date: number}> {
  constructor(props:any) {
    super(props);

    this.state = {
      amount: 0,
      date: 0,
      expense: ''
    };
  }

  public onExpenseChange = (e: any) => {
    const expense: string = e.target.value;
    this.setState(() => ({ expense }));
  }

  public onAmountChange = (e: any) => {
    const amount: number = e.target.value;
    this.setState(() => ({ amount }));
  }


  public handleSubmit = (e: any) => {
    this.setState(() => ({
      amount: this.state.amount,
      date: this.state.date,
      expense: this.state.expense
    }))
  }

  public render() {
    return (
      <div>
        <table>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
          <tr>
            <td><Input type="text" value={this.state.expense} onChange={this.onExpenseChange}/></td>
            <td><Input type="number" value={this.state.amount} onChange={this.onAmountChange}/></td>
            <td><Input type="date" value={this.state.date}/></td>
            <Button size="small" variant="raised" color="primary" onClick={this.handleSubmit}>
              Submit
            </Button>
          </tr>
        </table>
      </div>
    );
  }
}