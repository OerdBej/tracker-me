import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

// todo multiple props. Getting props from app.js passing to this component and passing to expense component
const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$250</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
