import * as React from 'react';
import './Table.css';


export default class Table extends React.Component<{}, {expense: string, amount: number, date: string}> {
  constructor(props:any) {
    super(props);

    this.state = {
      amount: 0,
      date: '',
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



  public render() {
    return (
      <div>
        <form>
          Expense:
          <input type="text"/>
          Amount:
          <input type="number"/>
          Date:
          <input type="date"/>
          <button>Save</button>
        </form>
        <table>
          <tr>
            <th>Expense</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
          <tr>
            <td>Food</td>
            <td>125.05</td>
            <td>05/01/2018</td>
          </tr>
          <tr>
            <td>Fun</td>
            <td>133.00</td>
            <td>07/12/2016</td>
          </tr>
        </table>
      </div>
    );
  }
}