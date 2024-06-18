import { useEffect, useState } from "react";
import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_DATA = [
  {
    id: "e1",
    title: "Car Insurance",
    date: new Date(2021, 2, 1),
    amount: 111.111,
  },
  {
    id: "e2",
    title: "Phone",
    date: new Date(2022, 2, 1),
    amount: 504.1,
  },
  {
    id: "e3",
    title: "Laptop",
    date: new Date(2020, 9, 17),
    amount: 854.12,
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  const addExpenseHandler = (savedData) => {
    setExpenses((prevExpenses) => {
      return [savedData, ...prevExpenses];
    });
    console.log(expenses);
  };
  useEffect(() => {
    console.log(expenses);
  }, [expenses]);

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
