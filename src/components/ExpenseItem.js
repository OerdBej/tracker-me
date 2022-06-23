import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

// todo multiple props. Getting props from app.js passing to this component and passing to expense component
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$250</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
