import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: "",
    date: "",
  });

  const handleInputHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmitHandler = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:4000/transaction", {
      method: "POST",
      body: form,
    });
    console.log(res);
  };

  return (
    <div>
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
    </div>
  );
}

export default App;
