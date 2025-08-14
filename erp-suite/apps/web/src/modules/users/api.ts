import { http } from '../../services/api/http';

export async function login(credentials: { email: string; password: string }, tenantId: string) {
  const response = await http.post('/auth/login', credentials, {
    headers: { 'X-Tenant-Id': tenantId },
    withCredentials: true, // for HttpOnly cookie
  });
  return response.data; // { token, role, user, tenant }
}