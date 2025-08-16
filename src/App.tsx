import { useEffect, useState } from "react";
import "./App.css";
import { getAgents } from "./services/agentsApi";
import FilterBar from "./components/FilterBar";

function App() {
  const [agents, setAgents] = useState<any>();

  useEffect(() => {
    getAgents()
      .then((data) => {
        console.log("API Response:", data);
        setAgents(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full bg-amber-600">
      <FilterBar />
    </div>
  );
}

export default App;
