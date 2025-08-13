Backend version endpoint:
// apps/api/src/modules/core/version.routes.ts
import { Router } from 'express';
export const versionRoutes = Router();
versionRoutes.get('/version', (req, res) => {
  res.json({
    success: true,
    data: {
      app: { version: process.env.APP_VERSION ?? '0.1.0' },
      modules: [
        { name: 'sales', version: '0.2.0' },
        // optionally hydrate from FS or DB
      ]
    }
  });
});