import {useState} from "react";
import axios from "axios";

function AddExpense(){

const [amount,setAmount] = useState("");
const [category,setCategory] = useState("");
const [description,setDescription] = useState("");

const submitExpense = async()=>{

await axios.post("http://localhost:8080/expenses",{
amount:Number(amount),
category,
description,
date:new Date().toISOString().split("T")[0]
});

window.location.reload();

};

return(

<div className="card">

<h2>Add Expense</h2>

<input
placeholder="Amount"
onChange={(e)=>setAmount(e.target.value)}
/>

<select onChange={(e)=>setCategory(e.target.value)}>

<option value="">Select Category</option>
<option value="Food">Food</option>
<option value="Travel">Travel</option>
<option value="Shopping">Shopping</option>
<option value="Bills">Bills</option>
<option value="Other">Other</option>

</select>

<input
placeholder="Description"
onChange={(e)=>setDescription(e.target.value)}
/>

<button onClick={submitExpense}>
Add Expense
</button>

</div>

)

}

export default AddExpense;