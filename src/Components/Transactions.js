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

  return (
    <div className="Transactions">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this Transaction</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => {
              return <Transaction key={index} transaction={Transaction} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};