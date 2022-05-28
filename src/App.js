import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Book",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Bicycle",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "My Car",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // the value from data, grabbed in state.
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // to see if the data arrived here. this is trigered when new expense is put there.
  const addExpenseHandler = (expense) => {
    //  update the state depending on the previous state. Arrow function with all the data from object states, and we update the state that we created for the dummy data. A function as an argument to update the state. random argument name... the data come from "expense" argument.
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* The same thing, passing as a props a function to new Expense. from app to newexpense and call it */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* Dynamic list with added data here. */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
