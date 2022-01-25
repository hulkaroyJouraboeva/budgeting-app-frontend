import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function TransactionDetails() {
  const [transaction, setTransaction] = useState([]);
  const { index } = useParams();
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => setTransaction(response.data))
  }, [API, index]);

  const handleDelete = (event) => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => navigate('/transactions'))
  };
  
  return (
    <article>
      <h3>
        {transaction.isFavorite ? <span>⭐️</span> : null} {transaction.name}
      </h3>
      <h5>
        <span>
          <a href={transaction.url}>{transaction.name}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {transaction.url}
      </h5>
      <h6>{transaction.category}</h6>
      <p>{transaction.description}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
};