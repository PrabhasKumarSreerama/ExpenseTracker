import { useEffect, useState } from "react";
import AppBar from "./components/AppBar";
import TransactionForm from "./components/TransactionForm";
import TransactionsList from "./components/TransactionsList";
import { Container } from "@mui/material";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState({});

  useEffect(() => {
    fetchTransactionsHandler();
  });

  const fetchTransactionsHandler = async () => {
    const res = await fetch("http://localhost:4000/transaction");
    const { data } = await res.json();
    setTransactions(data);
  };

  return (
    <div>
      <AppBar />
      <Container>
        <TransactionForm
          fetchTransactionsHandler={fetchTransactionsHandler}
          editTransaction={editTransaction}
        />
        <TransactionsList
          transactions={transactions}
          fetchTransactionsHandler={fetchTransactionsHandler}
          setEditTransaction={setEditTransaction}
        />
      </Container>
    </div>
  );
}

export default App;
