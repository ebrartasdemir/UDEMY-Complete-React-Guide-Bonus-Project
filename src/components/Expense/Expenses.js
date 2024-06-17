import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import { useState } from "react";
function Expenses(props) {
  const [selectedFilterYear,setSelectedFilterYear]=useState('2020');
  const expenseFilterHandler=(selectedYear)=>{
  setSelectedFilterYear(selectedYear);
  };
    return(
      <div>
        
        <Card className="expenses">
          <ExpenseFilter selected={selectedFilterYear} onFilterChange={expenseFilterHandler}/>
        <ExpenseItem
          title={props.expenses[0].title}
          date={props.expenses[0].date}
          amount={props.expenses[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          date={props.expenses[1].date}
          amount={props.expenses[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          date={props.expenses[2].date}
          amount={props.expenses[2].amount}
        ></ExpenseItem>
      </Card>
      </div>
    );
}
export default Expenses;