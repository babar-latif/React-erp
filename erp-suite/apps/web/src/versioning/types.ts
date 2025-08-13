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