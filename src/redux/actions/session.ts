import { LOGIN } from './types';

interface LoginProps {
  token?: string;
}

export const login = (token: LoginProps) => ({ type: LOGIN, token });
