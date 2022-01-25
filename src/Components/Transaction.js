import { Link } from "react-router-dom";

export default function Transaction({ transaction, index }) {
  return (
    <tr>
      <td>
        {transaction.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={transaction.url} target="_blank" rel="noreferrer">
          {transaction.name}
        </a>
      </td>
      <td>
        <Link to={`/transactions/${index}`}>✏️</Link>
      </td>
    </tr>
  );
};