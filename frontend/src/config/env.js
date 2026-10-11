const getEnv = (key, fallback) => {
  const value = process.env[key];
  return value === undefined || value === '' ? fallback : value;
};

export const AUTH_API_URL = getEnv('REACT_APP_AUTH_API_URL', '/api');
export const STREAMING_API_URL = getEnv('REACT_APP_STREAMING_API_URL', '/streaming-api/api');
export const STREAMING_PUBLIC_URL = getEnv('REACT_APP_STREAMING_PUBLIC_URL', '/streaming-public');
export const ADMIN_API_URL = getEnv('REACT_APP_ADMIN_API_URL', '/admin-api/api/admin');
export const CHAT_API_URL = getEnv('REACT_APP_CHAT_API_URL', '/chat-api/api/chat');
export const CHAT_SOCKET_URL = getEnv('REACT_APP_CHAT_SOCKET_URL', window.location.origin);
