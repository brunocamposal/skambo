import { USER_ID_JWT } from './types';

interface LoginProps {
  userId?: string;
}

export const userIdJwt = (userId: LoginProps) => ({ 
  type: USER_ID_JWT, 
  userId 
});
