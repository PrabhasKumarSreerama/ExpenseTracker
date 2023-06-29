import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Button from "@mui/material/Button";

const IntialForm = {
  amount: 0,
  description: "",
  date: new Date(),
};

export default function TransactionForm({ fetchTransactionsHandler }) {
  const [form, setForm] = useState(IntialForm);

  const handleChange = (event) => {
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

  const handleDate = (newDate) => {
    setForm({ ...form, date: newDate });
  };

  return (
    <Card sx={{ minWidth: 275, marginTop: 10 }}>
      <CardContent>
        <Typography variant="h6">Add New Transaction</Typography>
        <form onSubmit={handleSubmitHandler}>
          <TextField
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="Amount"
            size="small"
            variant="outlined"
            name="amount"
            value={form.amount}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="Description"
            size="small"
            variant="outlined"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Transaction Date"
              inputFormat="MM/DD/YYYY"
              sx={{ marginRight: 5 }}
              value={form.date}
              onChange={handleDate}
              renderInput={(params) => (
                <TextField
                  sx={{ marginRight: 5, padding: 0 }}
                  size="small"
                  {...params}
                />
              )}
            />
          </LocalizationProvider>
          <Button type="submit" variant="contained">
            Add
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
