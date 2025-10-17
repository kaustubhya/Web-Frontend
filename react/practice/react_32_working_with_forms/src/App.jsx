import "./App.css";
import ContextMenu from "./components/ContextMenu";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  return (
    <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
        <ExpenseForm />
        <ExpenseTable />
        <ContextMenu />
      </div>
    </main>
  );
}

export default App;
