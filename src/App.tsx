import { useEffect, useState } from "react";
import "./App.css";
import FilterBar from "./components/FilterBar";
import { Filters } from "./interfaces/filters";

function App() {
  const [filters, setFilters] = useState({ regions: [] });

  useEffect(() => {
    console.log("app.tsx has filters state and it works", filters);
  }, [filters]);

  const handleFilterChange = (key: keyof Filters, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div>
      <FilterBar onFilterChange={handleFilterChange} />
    </div>
  );
}

export default App;
