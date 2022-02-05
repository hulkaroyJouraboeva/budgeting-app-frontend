import axios from "axios";
import { Link } from "react-router-dom";

export default function Transaction({ transaction, index, setTransactions, transactions }) {
  const API = process.env.REACT_APP_API_URL;

  const handleDelete = (event) => {
    console.log('inside handleDelete')
    axios.delete(`${API}/transactions/${index}`)
      .then(() => {
        setTransactions(transactions);
      })
  };

  return (
    <tr>
      <td>
        <button onClick={handleDelete}>🗑</button>
      </td>
      <td>
        <p>{transaction.date}</p>
        <a 
          href={`/transactions/${index}`} 
          rel="noreferrer">
          {transaction.source}
        </a>
        <p>{transaction.amount}</p>
      </td>
      <td>
        <Link to={`/transactions/${index}/edit`}>✏️</Link>
      </td>
    </tr>
  );
};