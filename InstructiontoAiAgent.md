# Instruction to AI Agent — Build protocol

## Focus
Stay Dashboard-first, multi-tenant, and consistent. Do not deviate from view system, RBAC, or module manifests/versioning.

## Tech
- Frontend: React + TypeScript + Vite + Tailwind + React Router
- Backend: Node + Express + Prisma + PostgreSQL
- Validation: zod
- Auth: JWT (access+refresh)
- Tenancy: header `X-Tenant-Id`, middleware populates `req.tenantId`

## Module contract
Each module must include:
- Module.manifest.json (semver, apiVersion, routes, views, permissions, features)
- CHANGELOG.md
- schema.ts (zod)
- api.ts (tenant-scoped calls)
- pages/ and components/

## View system
- Use ViewSwitcher; support declared views from manifest
- Respect role-based view policies (RBAC)
- Persist view mode to URL `?view=` and localStorage

## Productivity features
- DataToolbar with search, filters, sorting, columns, import/export, print, share (email/web/WhatsApp), calendar
- Bulk actions: delete/edit/copy/status
- Attachments per record
- RawWorksheet for ad-hoc rows and CSV export
- Audit all mutating actions with user + tenant + ts

## Versioning
- Update Module.manifest.json and CHANGELOG.md on changes
- Update web/versioning/registry.ts to include new modules
- Backend `/api/v1/version` returns app + module versions

## Tenancy enforcement
- API routes only operate within `tenant_id`
- Repos require tenantId; forbid unscoped queries
- Frontend always sends `X-Tenant-Id`

## Commit flow
- Conventional commits
- One module/feature per PR
- Keep docs (PRD.md, InstructiontoAiAgent.md) updated with every step

## Next steps sequence
1. Web boot: Vite + Tailwind + Router + Contexts
2. Dashboard page + 3 widgets + version panel
3. View system components (List/Grid/Kanban/Gantt/Split)
4. DataToolbar + productivity utilities
5. Tenancy + auth scaffolding (frontend + backend)
6. First modules wired (Vendors list + Sales invoices form)
7. BOQ Kanban + Library panel


## 🛠️ Error Recovery Protocol

If the app fails to start or returns a 500 error:

1. Execute `start.sh` to auto-resolve common issues.
2. If errors persist, log output to `logs/error.log`.
3. Report unresolved modules or backend failures to the developer.


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


- Validate versioning across all modules: check for `Module.manifest.json` and `CHANGELOG.md`, confirm frontend `registry.ts` and backend `version.routes.ts` are implemented and consistent. Added backend version API 2025-08-12.
