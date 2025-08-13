erp-suite/
├─ apps/
│  ├─ web/                             # React + Vite + Tailwind (TypeScript)
│  │  ├─ public/
│  │  ├─ src/
│  │  │  ├─ assets/
│  │  │  ├─ components/
│  │  │  │  ├─ layout/
│  │  │  │  │  ├─ Sidebar.tsx
│  │  │  │  │  ├─ Topbar.tsx
│  │  │  │  │  └─ TenantSwitcher.tsx
│  │  │  │  ├─ view/                   # Generic view system
│  │  │  │  │  ├─ ViewSwitcher.tsx
│  │  │  │  │  └─ views/
│  │  │  │  │     ├─ ListView.tsx
│  │  │  │  │     ├─ GridView.tsx
│  │  │  │  │     ├─ KanbanView.tsx
│  │  │  │  │     ├─ GanttView.tsx
│  │  │  │  │     └─ SplitView.tsx
│  │  │  │  ├─ data/                   # Productivity components
│  │  │  │  │  ├─ DataToolbar.tsx
│  │  │  │  │  ├─ ColumnVisibility.tsx
│  │  │  │  │  ├─ BulkActionsBar.tsx
│  │  │  │  │  ├─ CalendarView.tsx
│  │  │  │  │  ├─ Attachments.tsx
│  │  │  │  │  └─ RawWorksheet.tsx
│  │  │  │  └─ chat/
│  │  │  │     └─ ChatBox.tsx
│  │  │  ├─ context/
│  │  │  │  ├─ AuthContext.tsx
│  │  │  │  ├─ TenantContext.tsx
│  │  │  │  └─ UIContext.tsx
│  │  │  ├─ hooks/
│  │  │  │  ├─ useViewMode.ts
│  │  │  │  ├─ useShortcuts.ts
│  │  │  │  ├─ useFilters.ts
│  │  │  │  └─ useDebounce.ts
│  │  │  ├─ pages/
│  │  │  │  ├─ Dashboard/
│  │  │  │  │  ├─ Dashboard.tsx
│  │  │  │  │  └─ widgets/
│  │  │  │  │     ├─ KpiCards.tsx
│  │  │  │  │     ├─ RecentActivity.tsx
│  │  │  │  │     └─ ChartRevenue.tsx
│  │  │  │  └─ NotFound.tsx
│  │  │  ├─ routes/
│  │  │  │  └─ index.tsx
│  │  │  ├─ services/
│  │  │  │  ├─ api/
│  │  │  │  │  ├─ http.ts
│  │  │  │  │  ├─ tenancy.ts
│  │  │  │  │  └─ audit.ts
│  │  │  │  └─ auth/
│  │  │  │     └─ tokens.ts
│  │  │  ├─ utils/
│  │  │  │  ├─ export.ts
│  │  │  │  ├─ import.ts
│  │  │  │  ├─ pdf.ts                 # print, stamp/sign stubs
│  │  │  │  └─ share.ts               # email/web share/WhatsApp
│  │  │  ├─ versioning/
│  │  │  │  ├─ registry.ts            # aggregates module manifests
│  │  │  │  └─ types.ts
│  │  │  ├─ modules/                  # All business modules (multi-tenant)
│  │  │  │  ├─ company/
│  │  │  │  │  ├─ pages/CompanyProfile.tsx
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ schema.ts
│  │  │  │  │  ├─ Module.manifest.json
│  │  │  │  │  └─ CHANGELOG.md
│  │  │  │  ├─ users/
│  │  │  │  │  ├─ pages/UsersList.tsx
│  │  │  │  │  ├─ pages/UserForm.tsx
│  │  │  │  │  ├─ roles/RoleMatrix.tsx
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ schema.ts
│  │  │  │  │  ├─ Module.manifest.json
│  │  │  │  │  └─ CHANGELOG.md
│  │  │  │  ├─ customers/
│  │  │  │  │  ├─ pages/CustomersList.tsx
│  │  │  │  │  ├─ pages/CustomerForm.tsx
│  │  │  │  │  ├─ projects/pages/ProjectsList.tsx
│  │  │  │  │  ├─ projects/pages/ProjectForm.tsx
│  │  │  │  │  ├─ projects/pages/ProjectGantt.tsx
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ schema.ts
│  │  │  │  │  ├─ Module.manifest.json
│  │  │  │  │  └─ CHANGELOG.md
│  │  │  │  ├─ sales/
│  │  │  │  │  ├─ pages/Quotes.tsx
│  │  │  │  │  ├─ pages/Invoices.tsx
│  │  │  │  │  ├─ components/InvoiceForm.tsx
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ schema.ts
│  │  │  │  │  ├─ Module.manifest.json
│  │  │  │  │  └─ CHANGELOG.md
│  │  │  │  ├─ purchase/
│  │  │  │  │  ├─ pages/PurchaseOrders.tsx
│  │  │  │  │  ├─ components/PurchaseOrderForm.tsx
│  │  │  │  │  ├─ kanban/PurchaseKanban.tsx
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ schema.ts
│  │  │  │  │  ├─ Module.manifest.json
│  │  │  │  │  └─ CHANGELOG.md
│  │  │  │  ├─ vendors/
│  │  │  │  │  ├─ pages/VendorsList.tsx
│  │  │  │  │  ├─ pages/VendorForm.tsx
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ schema.ts
│  │  │  │  │  ├─ Module.manifest.json
│  │  │  │  │  └─ CHANGELOG.md
│  │  │  │  ├─ payroll/
│  │  │  │  │  ├─ pages/Employees.tsx
│  │  │  │  │  ├─ pages/PayrollRuns.tsx
│  │  │  │  │  ├─ components/PayrollForm.tsx
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ schema.ts
│  │  │  │  │  ├─ Module.manifest.json
│  │  │  │  │  └─ CHANGELOG.md
│  │  │  │  ├─ pm/                      # Project management
│  │  │  │  │  ├─ pages/TasksKanban.tsx
│  │  │  │  │  ├─ pages/Milestones.tsx
│  │  │  │  │  ├─ pages/Gantt.tsx
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ schema.ts
│  │  │  │  │  ├─ Module.manifest.json
│  │  │  │  │  └─ CHANGELOG.md
│  │  │  │  ├─ accounts/
│  │  │  │  │  ├─ pages/ChartOfAccounts.tsx
│  │  │  │  │  ├─ pages/Expenses.tsx
│  │  │  │  │  ├─ pages/JournalEntries.tsx
│  │  │  │  │  ├─ pages/BankReconcile.tsx
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ schema.ts
│  │  │  │  │  ├─ Module.manifest.json
│  │  │  │  │  └─ CHANGELOG.md
│  │  │  │  ├─ taxation/
│  │  │  │  │  ├─ pages/TaxSetup.tsx
│  │  │  │  │  ├─ pages/Returns.tsx
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ schema.ts
│  │  │  │  │  ├─ Module.manifest.json
│  │  │  │  │  └─ CHANGELOG.md
│  │  │  │  ├─ deliveries/
│  │  │  │  │  ├─ pages/DeliveryOrders.tsx
│  │  │  │  │  ├─ pages/Tracking.tsx
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ schema.ts
│  │  │  │  │  ├─ Module.manifest.json
│  │  │  │  │  └─ CHANGELOG.md
│  │  │  │  ├─ assets/
│  │  │  │  │  ├─ pages/AssetRegister.tsx
│  │  │  │  │  ├─ pages/Depreciation.tsx
│  │  │  │  │  ├─ pages/Maintenance.tsx
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ schema.ts
│  │  │  │  │  ├─ Module.manifest.json
│  │  │  │  │  └─ CHANGELOG.md
│  │  │  │  ├─ inventory/
│  │  │  │  │  ├─ pages/InventoryList.tsx
│  │  │  │  │  ├─ components/ProductForm.tsx
│  │  │  │  │  ├─ pages/StockLedger.tsx
│  │  │  │  │  ├─ pages/WarehouseTransfers.tsx
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ schema.ts
│  │  │  │  │  ├─ Module.manifest.json
│  │  │  │  │  └─ CHANGELOG.md
│  │  │  │  ├─ reports/
│  │  │  │  │  ├─ pages/ReportBuilder.tsx
│  │  │  │  │  ├─ pages/FinancialReports.tsx
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ schema.ts
│  │  │  │  │  ├─ Module.manifest.json
│  │  │  │  │  └─ CHANGELOG.md
│  │  │  │  ├─ tickets/
│  │  │  │  │  ├─ pages/TicketsList.tsx
│  │  │  │  │  ├─ pages/TicketForm.tsx
│  │  │  │  │  ├─ api.ts
│  │  │  │  │  ├─ schema.ts
│  │  │  │  │  ├─ Module.manifest.json
│  │  │  │  │  └─ CHANGELOG.md
│  │  │  │  └─ boq/                     # Kanban BOQ with library
│  │  │  │     ├─ pages/BoqBoard.tsx
│  │  │  │     ├─ components/LibraryPanel.tsx
│  │  │  │     ├─ components/BoqKanban.tsx
│  │  │  │     ├─ api.ts
│  │  │  │     ├─ schema.ts
│  │  │  │     ├─ Module.manifest.json
│  │  │  │     └─ CHANGELOG.md
│  │  │  ├─ main.tsx
│  │  │  └─ App.tsx
│  │  ├─ index.html
│  │  ├─ tailwind.config.ts
│  │  ├─ postcss.config.cjs
│  │  ├─ tsconfig.json
│  │  └─ vite.config.ts
│  └─ api/                             # Node + Express + Prisma (TypeScript)
│     ├─ src/
│     │  ├─ config/
│     │  │  ├─ env.ts
│     │  │  └─ logger.ts
│     │  ├─ middleware/
│     │  │  ├─ auth.ts                # JWT, user in req
│     │  │  ├─ tenant.ts              # tenantId from header/membership
│     │  │  ├─ rbac.ts
│     │  │  └─ error.ts
│     │  ├─ modules/
│     │  │  ├─ core/                  # shared infra endpoints
│     │  │  │  ├─ health.routes.ts
│     │  │  │  └─ version.routes.ts   # exposes module versions to web
│     │  │  ├─ tenants/
│     │  │  │  ├─ tenants.routes.ts
│     │  │  │  └─ tenants.service.ts
│     │  │  ├─ users/ ...             # mirror web modules
│     │  │  ├─ company/ ...
│     │  │  ├─ customers/ ...
│     │  │  ├─ sales/ ...
│     │  │  ├─ purchase/ ...
│     │  │  ├─ vendors/ ...
│     │  │  ├─ payroll/ ...
│     │  │  ├─ pm/ ...
│     │  │  ├─ accounts/ ...
│     │  │  ├─ taxation/ ...
│     │  │  ├─ deliveries/ ...
│     │  │  ├─ assets/ ...
│     │  │  ├─ inventory/ ...
│     │  │  ├─ reports/ ...
│     │  │  ├─ tickets/ ...
│     │  │  └─ boq/ ...
│     │  ├─ prisma/
│     │  │  └─ schema.prisma
│     │  ├─ app.ts
│     │  └─ server.ts
│     ├─ tsconfig.json
│     └─ package.json
├─ docs/
│  ├─ PRD.md
│  └─ InstructiontoAiAgent.md
├─ .env.example
├─ package.json
└─ README.md
