import jwt from 'jsonwebtoken';

export default function getAuthToken() {
  const authToken = localStorage.getItem('AUTH_TOKEN');
  const payload = jwt.decode(authToken);

  if (!payload) {
    return null;
  }

  const { exp } = payload;
  if (Date.now() > exp * 1000) {
    return null;
  }

  return payload;
}
