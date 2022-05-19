import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// props from APP.js
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // deconstructuring the data that are passed through the input that in fact is the object that we got with the value of use state. Save in an object all the states, passing this oject to a function as a props. Here we are deconstructuring all the data from the object and store it into another object and deconstructuring it.
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData)
  };

  return (
    <div className="new-expense">
      {/*Passing data as a function props that will be executed to other components. . Will be called on because its a F that will grab the data from the objects of event.target.states from the other component. Using the function as a props. The F will be triggered when the something happens in this component. When the form is submited in the end. We dont execute here the FUNCTION we just point to the function to the component ExpenseForm. The second step here is to use this function */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
