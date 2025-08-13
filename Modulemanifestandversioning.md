Module manifest and versioning
Each module maintains its own version and changelog, and the Dashboard aggregates them.

Per module file: modules/<module>/Module.manifest.json

Per module changelog: modules/<module>/CHANGELOG.md

Master registry: apps/web/src/versioning/registry.ts loads manifests at build time and exposes them to Dashboard; backend exposes versions via /api/v1/version for ops.

Example Module.manifest.json:
{
  "name": "sales",
  "displayName": "Sales",
  "version": "0.2.0",
  "apiVersion": "1.0",
  "owner": "app",
  "routes": ["/sales/quotes", "/sales/invoices"],
  "views": ["list", "grid", "split"],
  "permissions": ["sales:read", "sales:write", "sales:approve"],
  "migrations": [
    { "id": "2025-08-12-001-add-invoice-index", "applied": true }
  ],
  "features": {
    "attachments": true,
    "exports": ["csv", "json"],
    "imports": ["csv"],
    "statusFlow": ["draft", "review", "approved", "void"]
  }
}

Master registry (web):
// apps/web/src/versioning/registry.ts
import type { ModuleManifest } from './types';

export const manifests: Record<string, ModuleManifest> = {
  company: await import('../modules/company/Module.manifest.json').then(m => m.default),
  users: await import('../modules/users/Module.manifest.json').then(m => m.default),
  customers: await import('../modules/customers/Module.manifest.json').then(m => m.default),
  sales: await import('../modules/sales/Module.manifest.json').then(m => m.default),
  purchase: await import('../modules/purchase/Module.manifest.json').then(m => m.default),
  vendors: await import('../modules/vendors/Module.manifest.json').then(m => m.default),
  payroll: await import('../modules/payroll/Module.manifest.json').then(m => m.default),
  pm: await import('../modules/pm/Module.manifest.json').then(m => m.default),
  accounts: await import('../modules/accounts/Module.manifest.json').then(m => m.default),
  taxation: await import('../modules/taxation/Module.manifest.json').then(m => m.default),
  deliveries: await import('../modules/deliveries/Module.manifest.json').then(m => m.default),
  assets: await import('../modules/assets/Module.manifest.json').then(m => m.default),
  inventory: await import('../modules/inventory/Module.manifest.json').then(m => m.default),
  reports: await import('../modules/reports/Module.manifest.json').then(m => m.default),
  tickets: await import('../modules/tickets/Module.manifest.json').then(m => m.default),
  boq: await import('../modules/boq/Module.manifest.json').then(m => m.default)
};


Types:
// apps/web/src/versioning/types.ts
export type ModuleManifest = {
  name: string;
  displayName: string;
  version: string;
  apiVersion: string;
  owner: 'app' | 'platform';
  routes: string[];
  views: Array<'list' | 'grid' | 'kanban' | 'gantt' | 'split'>;
  permissions: string[];
  migrations: Array<{ id: string; applied: boolean }>;
  features: Record<string, unknown>;
};


Dashboard widget to show versions:
// apps/web/src/pages/Dashboard/widgets/KpiCards.tsx (excerpt)
import { manifests } from '../../../versioning/registry';
const modulesSummary = Object.values(manifests).map(m => ({ name: m.displayName, version: m.version }));


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


Semantic versioning:

Per module: independent semver (e.g., sales 0.2.0 while inventory 0.1.1).

App master: app-wide version for dashboard shell.

CHANGELOG.md in each module uses Keep a Changelog format.

Cross-cutting essentials (kept intact)
Multi-tenant header X-Tenant-Id, TenantContext + tenant middleware on API.

RBAC: role → permissions; View policy per role per module.

View system: ViewSwitcher + List/Grid/Kanban/Gantt/Split.

Productivity: DataToolbar + ColumnVisibility + BulkActions + Calendar + Attachments + RawWorksheet + import/export + print + share + WhatsApp link + status flow + audit logging + bulk operations.

Digital stamp/sign: client stamp stub, server sign endpoint (future).