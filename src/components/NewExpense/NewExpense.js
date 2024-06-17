import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
function NewExpense(props){
    const saveNewDataExpenseHandler=(enteredExpenseData)=>{
        const savedData={
            ...props.enteredExpenseData,
            id:Math.random().toString()
        }
        console.log(savedData);
        props.onAddExpense(savedData);
    }
    return(
        <div className="new-expense">
<ExpenseForm onSavedData={saveNewDataExpenseHandler}></ExpenseForm>
</div>
    );
}
export default NewExpense;
