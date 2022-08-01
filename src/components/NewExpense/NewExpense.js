import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

// !getting the props from App.js
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  // ! Parameter name arbitrary, get the data from props of ExpenseForm state object when it handles the FORM.
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // !passing the props function from app.js, and passing the data to call it. This data came from another component ExpenseForm()
    props.onAddExpense(expenseData);
    // form submited conditional rendering closing the ui page. Uptdating STATE
    setIsEditing(false);
  };

  // Toggle button for the component logic
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditiongHander = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* Condtitional toggle => button clicked component show & submit it!show*/}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
      {/* Function triggered when something happen to this component.Receives the value above. When the form is submited. The pointer is passed to ExpenseForm */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditiongHander}
        />
      )}
    </div>
  );
};

export default NewExpense;
