import { useEffect, useState } from "react";
import AppBar from "./components/AppBar";
import TransactionForm from "./components/TransactionForm";

const IntialForm = {
  amount: 0,
  description: "",
  date: "",
};

function App() {
  const [form, setForm] = useState(IntialForm);

  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactionsHandler();
  });

  const fetchTransactionsHandler = async () => {
    const res = await fetch("http://localhost:4000/transaction");
    const { data } = await res.json();
    setTransactions(data);
  };

  const handleInputHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmitHandler = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.ok) {
      setForm(IntialForm);
      fetchTransactionsHandler();
    }
  };

  return (
    <div>
      <AppBar />
      <TransactionForm />
      <form onSubmit={handleSubmitHandler}>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleInputHandler}
          placeholder="Enter transaction amount"
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={handleInputHandler}
          placeholder="Enter transaction details"
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleInputHandler}
        />
        <button type="submit">Submit</button>
      </form>

      <br />

      <section>
        <table>
          <thead>
            <th>Amount</th>
            <th>Description</th>
            <th>Date</th>
          </thead>
          <tbody>
            {transactions.map((txn) => (
              <tr key={txn._id}>
                <td>{txn.amount}</td>
                <td>{txn.description}</td>
                <td>{txn.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
