export interface Agent {
  id: number;
  name: string;
  surname: string;
  avatar: string;
}

export interface CreateAgentPayload {
  name: string;
  surname: string;
  email: string;
  phone: string;
  avatar: string;
}
