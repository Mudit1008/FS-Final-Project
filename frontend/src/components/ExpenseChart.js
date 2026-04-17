import {
Chart as ChartJS,
ArcElement,
Tooltip,
Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
ArcElement,
Tooltip,
Legend
);

function ExpenseChart({expenses}){

const categoryTotals = {};

expenses.forEach(e=>{

if(!categoryTotals[e.category]){
categoryTotals[e.category] = 0;
}

categoryTotals[e.category] += Number(e.amount);

});

const data = {

labels:Object.keys(categoryTotals),

datasets:[
{
label:"Expenses",
data:Object.values(categoryTotals),
backgroundColor:[
"#FF6384",
"#36A2EB",
"#FFCE56",
"#4BC0C0",
"#9966FF"
]
}
]

};

return(

<div style={{width:"400px",margin:"20px auto"}}>

<Pie data={data}/>

</div>

)

}

export default ExpenseChart;