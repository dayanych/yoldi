import { api } from './axios';

interface AuthResponse {
  value: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  email: string;
  name: string;
  password: string;
}

export const authApi = {
  async signIn(payload: SignInPayload): Promise<string> {
    const response = await api.post<AuthResponse>('/api/auth/login', payload);

    return response.data.value;
  },

  async signUp(payload: SignUpPayload): Promise<string> {
    const response = await api.post<AuthResponse>('/api/auth/sign-up', payload);

    return response.data.value;
  },
}
