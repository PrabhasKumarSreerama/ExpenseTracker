import React from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionsList from "../components/TransactionsList";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";

const Home = () => {
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
  );
};

export default Home;
