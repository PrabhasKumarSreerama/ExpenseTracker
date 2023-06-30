import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import IconButton from "@mui/material/IconButton";
import dayjs from "dayjs";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

export default function TransactionsList({
  transactions,
  fetchTransactionsHandler,
  setEditTransaction,
}) {
  const removeHandler = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    const res = await fetch(`http://localhost:4000/transaction/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      fetchTransactionsHandler();
      window.alert("Deleted Successfully");
    }
  };
  const formatDate = (date) => {
    return dayjs(date).format("DD MMM,YYYY");
  };
  return (
    <>
      <Typography sx={{ marginTop: 10 }} variant="h6">
        List of Transactions
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((row) => (
              <TableRow
                key={row._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.amount}
                </TableCell>
                <TableCell align="center">{row.description}</TableCell>
                <TableCell align="center">{formatDate(row.date)}</TableCell>
                <TableCell align="center">
                  <IconButton
                    color="secondary"
                    onClick={() => setEditTransaction(row)}
                  >
                    <EditNoteRoundedIcon />
                  </IconButton>
                  <IconButton
                    color="warning"
                    onClick={() => removeHandler(row._id)}
                  >
                    <DeleteOutlineRoundedIcon sx={{ marginLeft: 1.5 }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
