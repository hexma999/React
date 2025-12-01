import React, { useState } from "react";
import { DarkModeProvider } from "./context/DarkmodeContext";
import Header from "./components/header/Header";
import TodoList from "./components/todolist/TodoList";
import "./App.css";
const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter} onFilterChange={setFilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}
export default App;
