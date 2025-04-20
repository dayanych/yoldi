import { User } from "@/entities";

import { api } from "./axios";

export const accountsApi = {
  async getAccounts(): Promise<User[]> {
    const response = await api.get('/api/user');

    return response.data;
  },

  async getAccount(slug: string): Promise<User> {
    const response = await api.get(`/api/user/${slug}`);

    return response.data;
  },
};
