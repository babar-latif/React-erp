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