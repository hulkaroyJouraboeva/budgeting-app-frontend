import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function TransactionNewForm() {
  const API = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const [transaction, setTransaction] = useState({
    name: "",
    url: "",
    date: null,
    source: "",
    isFavorite: false,
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
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        />
        <label htmlFor="url">URL:</label>
        <input
          id="url"
          type="text"
          pattern="http[s]*://.+"
          required
          value={transaction.url}
          placeholder="http://"
          onChange={handleTextChange}
        />
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
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};