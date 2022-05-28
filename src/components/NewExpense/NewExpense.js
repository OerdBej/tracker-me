import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

// props from APP.js
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //deconstructing data that are saved into an object with state. Passing the objects to a F as props -> ExpenseForm

    const expenseData = {
      //arbitrary parameter from submit handler function
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // Prop -> App.js If # is from ExpenseForm we get the data, to call the F from APP.js through props.
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {/* Data to a F as props that executes to other components. Grab the data from object of events. Using F as props that will trigered when something happens to this component. We dont execute the F we just point to the funtion -> ExpenseForm*/}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
