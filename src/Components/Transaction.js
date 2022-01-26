import { Link } from "react-router-dom";

export default function Transaction({ transaction, index }) {
  return (
    <tr>
      <td>
        {/* {transaction.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )} */}
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
        <Link to={`/transactions/${index}`}>✏️</Link>
      </td>
    </tr>
  );
};