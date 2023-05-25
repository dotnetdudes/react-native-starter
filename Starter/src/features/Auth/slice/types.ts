/* --- STATE --- */
export interface UserType {
  amr: Array<String>;
  at_hash: string;
  aud: string;
  auth_time: number;
  email: string;
  email_verified: string;
  exp: number;
  family_name: string;
  given_name: string;
  iat: number;
  idp: string;
  iss: string;
  name: string;
  nbf: number;
  nonce: string;
  preferred_username: string;
  s_hash: string;
  sid: string;
  sub: string;
  website: string;
}

export interface AuthState {
  user: UserType | undefined | null;
  isAuthenticated: boolean;
  refreshCount: number;
  loading: boolean;
  error: string | undefined | null;
}
