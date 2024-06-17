import "./App.css";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const addExpenseHandler=(expense)=>{
    const savedData={
      ...expense
    }
    console.log(savedData+"from app.js")
  };
  const expenses = [
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
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
