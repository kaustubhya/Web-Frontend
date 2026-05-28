import { useState } from "react";
import "./App.css";
import ContextMenu from "./components/ContextMenu";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import { expenseData } from "../expenseData";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [fetchData, setFetchData] = useLocalStorage('expenses', expenseData);
  // initially, we have some values from expense data,
  // so you first show that in the table, we will add some more in the future

  const [editingRowId, setEditingRowId] = useLocalStorage("editingRowId", "");

  const [inputData, setInputData] = useLocalStorage('expense', {
    title: "",
    category: "",
    amount: "",
    email: "",
  });

  const [localStorageData, setLocalStorageData] = useLocalStorage('key', [1, 2, 3]);
  // console.log(localStorageData);

  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm
          setFetchData={setFetchData}
          inputData={inputData}
          setInputData={setInputData}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />
        {/* send this fetched in the table to display*/}
        <ExpenseTable
          fetchData={fetchData}
          setFetchData={setFetchData}
          setInputData={setInputData}
          setEditingRowId={setEditingRowId}
        />
        {/* the setFetchedData inside the table will take care of deletion */}
      </div>
    </main>
  );
}

export default App;
