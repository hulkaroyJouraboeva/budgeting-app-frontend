import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function TransactionEditForm() {
  const API = process.env.REACT_APP_API_URL;
  const { index } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    date: null,
    amount: 0,
    source: "",
    isFavorite: false,
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setTransaction({ ...transaction, isFavorite: !transaction.isFavorite });
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
      .then(() => navigate(`/transactions/${index}`));
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
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={transaction.isFavorite}
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