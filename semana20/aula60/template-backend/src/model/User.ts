export interface AuthenticationData {
  id: string;
}

export interface UserCredentials {
  email: string;
  password: string;
}

export interface User extends AuthenticationData, UserCredentials {
  name: string;
}
