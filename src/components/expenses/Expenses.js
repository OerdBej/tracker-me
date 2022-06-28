import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  // pass a function here to call expenses component when something happen to dropdownChangeHandler and the input change something. Whenever the handlerFunction executed when can update the state with the parameter received

  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };
  return (
    <div>
      <Card className="expenses">
        {/* this props is used and called on the other component */}
        <ExpensesFilter onChangeFilter={filterChangeHandler} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};
export default Expenses;
