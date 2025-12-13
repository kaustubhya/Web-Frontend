import { useState } from "react";
import "./App.css";
import ContextMenu from "./components/ContextMenu";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import { expenseData } from "../expenseData";

function App() {
  const [fetchData, setFetchData] = useState(expenseData);
  // initially, we have some values from expense data, so you first show that in the table, we will add some more in the future
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm setFetchData={setFetchData} />
        <ExpenseTable fetchData={fetchData} /> 
        {/* send this fetched in the table to display */}
        <ContextMenu />
      </div>
    </main>
  );
}

export default App;
