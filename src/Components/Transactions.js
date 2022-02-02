import { useState, useEffect } from "react";
import Transaction from "./Transaction";
import axios from 'axios';

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((response) => { setTransactions(response.data) })
      .catch((e) => console.log('catch', e))
  }, [API]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`${API}/transactions`);
  //     setTransactions(response.data);
  //   };
  //   fetchData();
  // }, [API]);

  const getTotal = (transactions) => {
    return transactions
      .map((transaction) => transaction.amount)
      .reduce((prev, cur) => prev + cur, 0)
  }

  return (
    <div className="Transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th>
                <h2>Bank Account Total: ${getTotal(transactions)}</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return <Transaction key={index} index={index} transaction={transaction} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};