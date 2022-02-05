import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function TransactionEditForm() {
  const API = process.env.REACT_APP_API_URL;
  const { index } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    date: '',
    amount: 0,
    source: '',
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  useEffect(() => { 
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => { setTransaction(response.data) }) 
  }, [API, index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then(() => { 
        navigate(`/transactions`);
      });
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">date:</label>
        <input
          id="date"
          type="text"
          name="date"
          value={transaction.date}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="source">source:</label>
        <textarea
          id="source"
          name="source"
          value={transaction.source}
          onChange={handleTextChange}
          placeholder="Describe why you transactioned this site"
        />
        <label htmlFor="amount">amount:</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={transaction.amount}
          placeholder="type in the amount ..."
          onChange={handleTextChange}
        />
        <br />
        <input type="submit" />
      </form>

      <Link to={`/transactions/${index}`}>
        <button>Never mind!</button>
      </Link>
    </div>
  );
};