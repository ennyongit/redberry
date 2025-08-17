import { Agent, CreateAgentPayload } from "../interfaces/agent";
import axiosInstance from "./axiosInstance";

export const getAgents = () => axiosInstance.get<Agent[], Agent[]>("/agents");

export const postAgents = (agentPayload: CreateAgentPayload) =>
  axiosInstance.post<CreateAgentPayload, Agent>("/agents", agentPayload);
