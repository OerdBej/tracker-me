import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    // !The function that we received as props. Call it and forward the value. Forwarded to expenses.js
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        {/* get the input value from user and store it as pointe the function to be triggered. 2 way binding: updating the value of the selected while passing the props from Expenses */}

        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
