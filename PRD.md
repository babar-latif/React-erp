# PRD — Multi-tenant ERP suite (Dashboard-first)

## Purpose
Deliver a multi-tenant, modular ERP with a fast, configurable Dashboard, strong tenant isolation, and consistent UX patterns across all modules. Each module versions independently and reports to a master registry surfaced on the Dashboard.

## Core pillars
- Multi-tenancy: strict row-level `tenant_id` enforcement
- Dashboard-first: widgets for KPIs, activity, charts
- Unified views: List, Grid, Kanban, Gantt, Split via ViewSwitcher
- Productivity: filters, search, sorting, hide/show, attachments, import/export, print, email/share, copy, status flow, raw worksheet, WhatsApp/chat, audit, bulk actions
- Versioning: per-module manifest + changelog, master registry

## Roles
- Owner (platform), Tenant Admin, Member

## Tenancy model
- JWT auth, memberships (user ↔ tenant ↔ role)
- Header `X-Tenant-Id` selects active tenant; API middleware injects `req.tenantId`
- All tenant data tables include and index `tenant_id`

## Modules (phase baseline)
- Company setup, Users/Permissions, Dashboard, Customers & Projects, Sales, Purchase, Vendors, Staff & Payroll, Project Management, Accounts & Expenses, Taxation, Deliveries, Assets, Inventory, Reports, Tickets, BOQ

## View policy (examples)
- Admin: all views; Inventory default Grid; BOQ default Kanban
- Sales: List/Kanban; BOQ default Kanban
- Warehouse: Inventory Grid/List; Purchase Kanban/List
- Guest: List only

## Versioning
- Module.manifest.json per module with `version`, `apiVersion`, `views`, `permissions`, `features`, `migrations`
- CHANGELOG.md per module
- Dashboard aggregates manifests; API exposes versions
- Semver per module; app shell has master semver

## Success criteria
- Dashboard loads < 2s with cached widgets
- View toggle < 100ms; DnD 60fps for Kanban
- Import/export CSV roundtrip under 10s for 10k rows
- No cross-tenant data leakage (tested via e2e)
- Module versions visible on Dashboard

## Out of scope (phase 1)
- Realtime collaboration
- Server-side PDF signing (stub only)


- Backend exposes `/api/v1/version` endpoint returning app and per-module versions (added 2025-08-12).
