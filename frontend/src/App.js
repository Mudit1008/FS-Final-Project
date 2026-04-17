import "./App.css";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";

function App(){
return(

<div className="container">

<h1 className="title"> Digital Expense Tracker</h1>

<AddExpense/>

<ExpenseList/>

</div>

)

}

export default App;
//update 