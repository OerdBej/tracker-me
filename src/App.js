import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Books",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Laptop", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Bike",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Chair",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  //  liftin the state up and populating it with data
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* we need to update the data that we have received so we need USESTATE (UPDATE PREV STATE) */}
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* this expense component need now the data from lifting state up. so all data are passed here */}
      {/* when we filter we pass raw state data */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
