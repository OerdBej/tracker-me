import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

// !getting the props from App.js
const NewExpense = (props) => {
  // ! Parameter name arbitrary, get the data from props of ExpenseForm state object when it handles the FORM.
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // !passing the props function from app.js, and passing the data to call it. This data came from another component ExpenseForm()
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* Function triggered when something happen to this component.Receives the value above. When the form is submited. The pointer is passed to ExpenseForm */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
