import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Transaction({ transaction, index }) {
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const handleDelete = (event) => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => navigate('/transactions'))
  };
  // Deleting from Index is currently not functional for some reason :/

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