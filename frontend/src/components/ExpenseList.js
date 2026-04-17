import { useEffect, useState } from "react";
import axios from "axios";
import ExpenseChart from "./ExpenseChart";

function ExpenseList() {

const [expenses, setExpenses] = useState([]);

useEffect(() => {

axios.get("http://localhost:8080/expenses")
.then(res => {
setExpenses(res.data);
});

}, []);

const deleteExpense = async (id) => {

await axios.delete("http://localhost:8080/expenses/" + id);

setExpenses(expenses.filter(e => e.id !== id));

};

const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);

const getCategoryColor = (category) => {

switch(category){

case "Food":
return "#FFB3BA";

case "Travel":
return "#BAE1FF";

case "Shopping":
return "#BAFFC9";

case "Bills":
return "#FFFFBA";

default:
return "#A6FAFF";

}

};

return (

<div className="card">

<h2>Expense Dashboard</h2>

<div className="dashboard-cards">

<div className="stat-card" style={{background:"#FF6B6B"}}>
<h3>Total Spent</h3>
<h1>₹{total}</h1>
</div>

<div className="stat-card" style={{background:"#4ECDC4"}}>
<h3>Transactions</h3>
<h1>{expenses.length}</h1>
</div>

</div>

<div className="chart">
<ExpenseChart expenses={expenses}/>
</div>

<h2>Expense List</h2>

{expenses.map(e => (

<div className="expense-item" key={e.id}>

<span>

<span
style={{
background: getCategoryColor(e.category),
padding:"4px 10px",
border:"2px solid black",
marginRight:"10px",
fontWeight:"bold"
}}
>
{e.category}
</span>

₹{e.amount}

</span>

<button
style={{
background:"#FFD93D",
border:"2px solid black",
padding:"6px 10px",
fontWeight:"bold"
}}
onClick={() => deleteExpense(e.id)}
>
Delete
</button>

</div>

))}

</div>

);

}

export default ExpenseList;