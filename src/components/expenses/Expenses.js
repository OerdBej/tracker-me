import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  // this control the expenses Filter here is the logic there is just UI. Controled component
  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  // props from app.js -> converting the state string and checking it with state. Boolean
  const filteredExpenses = props.items.filter((expense) => {
    // filter in terms of DATA OBJECT FROM APP.JS
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* passing as a props the filter() -> filter by YEAR -> RETURN DATA OBJECT*/}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
