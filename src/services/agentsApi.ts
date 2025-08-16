import { Agent } from "../interfaces/agent";
import axiosInstance from "./axiosInstance";

export const getAgents = () => axiosInstance.get("/agents");

export const postAgents = (agent: Agent) =>
  axiosInstance.post("/agents", agent);
