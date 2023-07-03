import React from "react";
import TransactionForm from "../components/TransactionForm";
import TransactionsList from "../components/TransactionsList";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [editTransaction, setEditTransaction] = useState({});

  useEffect(() => {
    fetchTransactionsHandler();
  }, []);

  const fetchTransactionsHandler = async () => {
    const token = Cookies.get("token");
    const res = await fetch(`${process.env.REACT_APP_API_URL}/transaction`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
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
