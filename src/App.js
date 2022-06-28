import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
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

  // ! getting the data from newExpense
  const addExpenseHandler = (expense) => {
    console.log("This is from the App.js");
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
