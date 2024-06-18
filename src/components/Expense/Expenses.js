import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2020");
  const expenseFilterHandler = (selectedYear) => {
    setSelectedFilterYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={selectedFilterYear}
          onFilterChange={expenseFilterHandler}
        />
        {props.expenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
       
      </Card>
    </div>
  );
}
export default Expenses;
