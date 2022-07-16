import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  console.log(props);
  return (
    <ExpenseItem
      title={props.expense.title}
      amount={props.expense.amount}
      date={props.expense.date}
    ></ExpenseItem>
  );
}

export default Expenses;
