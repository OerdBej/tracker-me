import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  // pass a function here to call expenses component when something happen to dropdownChangeHandler and the input change something. Whenever the handlerFunction executed when can update the state with the parameter received

  // this control the expenses Filter here is the logic there is just UI. Controled component
  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };
  return (
    <div>
      <Card className="expenses">
        {/* this props is used and called on the other component. Since we are setting the current state to 2020 and we pass here another props, this can be used as a filter to triger the other component to be display. We use this props to other component */}
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        {/* We have accesss to APP data via props. Dynamic data expression array with dynamic JSX.*/}
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
