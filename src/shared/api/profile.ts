import { User } from "@/entities";

import { api } from "./axios";

export interface UpdateProfilePayload {
  name: string;
  slug: string;
  description: string;
}

export const profileApi = {
  async getProfile(): Promise<User> {
    const response = await api.get<User>('/api/profile');

    return response.data;
  },

  async updateProfile(payload: UpdateProfilePayload): Promise<User> {
    const response = await api.patch<User>('/api/profile', payload);

    return response.data;
  },
};
