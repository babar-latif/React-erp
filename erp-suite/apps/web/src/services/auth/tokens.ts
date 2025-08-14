import jwt from 'jsonwebtoken';

const ACCESS_SECRET = process.env.ACCESS_SECRET!;
const REFRESH_SECRET = process.env.REFRESH_SECRET!;

export function issueTokens(userId: string, tenantId: string, role: string) {
  const access = jwt.sign({ userId, tenantId, role }, ACCESS_SECRET, { expiresIn: '15m' });
  const refresh = jwt.sign({ userId, tenantId }, REFRESH_SECRET, { expiresIn: '7d' });
  return { access, refresh };
}