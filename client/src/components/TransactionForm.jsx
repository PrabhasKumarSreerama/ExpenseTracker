import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import Button from "@mui/material/Button";

export default function TransactionForm() {
  const handleChange = () => {};
  return (
    <Card sx={{ minWidth: 275, marginTop: 10 }}>
      <CardContent>
        <Typography variant="h6">Add New Transaction</Typography>
        <form>
          <TextField
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="Amount"
            size="small"
            variant="outlined"
          />
          <TextField
            sx={{ marginRight: 5 }}
            id="outlined-basic"
            label="Description"
            size="small"
            variant="outlined"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Transaction Date"
              inputFormat="MM/DD/YYYY"
              onChange={handleChange}
              sx={{ marginRight: 5, padding: 0 }}
              //   size=3px
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
