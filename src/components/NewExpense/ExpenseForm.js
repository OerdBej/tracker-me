import React, { useState } from "react";

import "./ExpenseForm.css";

// we have here a prop that is a function from new expense. into the submitHandler
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    // to prevent the default of request being sent and not reload the page
    event.preventDefault();

    const expenseData = {
      // We are grabing the date from the state

      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);

    // function props from onSaveExpenseData and execute it here. Passing as arguments the data from the object states that we are passsing to parameter to other component. comes newExpense.js. We EXECUTE HERE THE FUNCTION FROM NEW EXPENSE AND WE PASS THE DATA FROM OBJECT WITH STATES. fUNCTION DEFINED IN ANOTHER COMPONETN EXECUTED HERE BECAUSE WE ARE PASSING A POINTER
    props.onSaveExpenseData(expenseData);
    // Here we are setting it to an empty string AGAIN. OVER WRITE INPUT AND MAKE IT 0
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* Here when we change the state we change also the input at the same time. We overwrite what user writed and at the same time we make sure that we clear what we typed*/}
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
