interface AuthConfig {
  TOKEN_ENDPOINT: string;
  CLIENT_ID: string;
  SECRET: string;
}

export const AUTH_CONFIG: AuthConfig = {
  TOKEN_ENDPOINT: 'oauth/token',
  CLIENT_ID: 'clientPasswordId',
  SECRET: 'secret',
};
