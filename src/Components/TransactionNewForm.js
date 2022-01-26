import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function TransactionNewForm() {
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    date: '',
    amount: '',
    source: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setTransaction({ ...transaction, isFavorite: !transaction.isFavorite });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/transactions`, transaction)
      .then(() => navigate('/transactions'));
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">date:</label>
        <input
          id="date"
          type="text"
          name="date"
          value={transaction.date}
          placeholder="01/30/2022"
          onChange={handleTextChange}
        />
        <label htmlFor="source">source:</label>
        <textarea
          id="source"
          name="source"
          value={transaction.source}
          onChange={handleTextChange}
          placeholder="What is the source of this transaction?"
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
    </div>
  );
};