import { useEffect, useState } from "react";
import "./App.css";
import { getAgents } from "./services/agentsApi";
import { Agent } from "./interfaces/agent";

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

  if (!agents) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full bg-amber-600">
      <ul>
        {agents.map((agent: Agent) => (
          <li key={agent.id}>{agent.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
