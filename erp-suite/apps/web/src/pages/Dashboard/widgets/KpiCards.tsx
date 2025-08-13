// apps/web/src/pages/Dashboard/widgets/KpiCards.tsx

import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import UpdateIcon from '@mui/icons-material/Update';
import CategoryIcon from '@mui/icons-material/Category';
import VerifiedIcon from '@mui/icons-material/Verified';

import { manifests } from '../../../versioning/registry';

type ManifestRow = {
  key: string;
  name: string;
  title?: string;
  version: string;
  updatedAt?: string;
  status?: string;
  changelogUrl?: string;
};

const toManifestRows = (): ManifestRow[] => {
  return Object.entries(manifests)
    .map(([key, m]: any) => ({
      key,
      name: m?.name ?? key,
      title: m?.title,
      version: m?.version ?? '0.0.0',
      updatedAt: m?.updatedAt,
      status: m?.status,
      changelogUrl: m?.changelogUrl,
    }))
    .sort((a, b) => (a.name || '').localeCompare(b.name || ''));
};

const formatDate = (value?: string) => {
  if (!value) return '—';
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return value;
  return d.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });
};

const statusColor = (status?: string):
  | 'default'
  | 'success'
  | 'warning'
  | 'info'
  | 'error' => {
  if (!status) return 'default';
  const s = status.toLowerCase();
  if (s === 'stable' || s === 'release') return 'success';
  if (s === 'rc' || s === 'release-candidate') return 'info';
  if (s === 'beta') return 'warning';
  if (s === 'alpha' || s === 'experimental') return 'error';
  return 'default';
};

const StatCard = ({
  icon,
  label,
  value,
  help,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  help?: string;
}) => (
  <Card variant="outlined" sx={{ height: '100%' }}>
    <CardContent>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: 2,
            bgcolor: 'action.hover',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </Box>
        <Box sx={{ flex: 1 }}>
          <Stack direction="row" spacing={0.75} alignItems="center">
            <Typography variant="body2" color="text.secondary">
              {label}
            </Typography>
            {help && (
              <Tooltip title={help}>
                <InfoOutlinedIcon sx={{ fontSize: 16, color: 'text.disabled' }} />
              </Tooltip>
            )}
          </Stack>
          <Typography variant="h5" fontWeight={700} sx={{ mt: 0.25 }}>
            {value}
          </Typography>
        </Box>
      </Stack>
    </CardContent>
  </Card>
);

const ModuleVersionsCard = () => {
  const rows = toManifestRows();

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
          <Typography variant="h6" fontWeight={700}>
            Module versions
          </Typography>
          <Typography variant="caption" color="text.secondary">
            From local manifests
          </Typography>
        </Stack>

        {/* Desktop table */}
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Table size="small" aria-label="module-versions">
            <TableHead>
              <TableRow>
                <TableCell>Module</TableCell>
                <TableCell>Version</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((r) => (
                <TableRow
                  key={r.key}
                  hover
                  sx={{ cursor: r.changelogUrl ? 'pointer' : 'default' }}
                  onClick={() => r.changelogUrl && window.open(r.changelogUrl, '_blank')}
                >
                  <TableCell>
                    <Stack spacing={0.25}>
                      <Typography variant="body2" fontWeight={600}>
                        {r.title || r.name}
                      </Typography>
                      {r.title && r.title !== r.name && (
                        <Typography variant="caption" color="text.secondary">
                          {r.name}
                        </Typography>
                      )}
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontVariantNumeric: 'tabular-nums' }}>
                      {r.version}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Chip
                      size="small"
                      label={r.status ? r.status : '—'}
                      color={statusColor(r.status)}
                      variant={r.status ? 'filled' : 'outlined'}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" color="text.secondary">
                      {formatDate(r.updatedAt)}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>

        {/* Mobile list */}
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Stack divider={<Divider flexItem />} spacing={1}>
            {rows.map((r) => (
              <Box
                key={r.key}
                onClick={() => r.changelogUrl && window.open(r.changelogUrl, '_blank')}
                sx={{
                  py: 1,
                  cursor: r.changelogUrl ? 'pointer' : 'default',
                }}
              >
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Stack spacing={0.25}>
                    <Typography variant="body2" fontWeight={700}>
                      {r.title || r.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      v{r.version} • {formatDate(r.updatedAt)}
                    </Typography>
                  </Stack>
                  <Chip
                    size="small"
                    label={r.status ? r.status : '—'}
                    color={statusColor(r.status)}
                    variant={r.status ? 'filled' : 'outlined'}
                  />
                </Stack>
              </Box>
            ))}
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

const useKpiData = () => {
  const rows = toManifestRows();

  const totalModules = rows.length;

  const stableModules = rows.filter((r) => (r.status || '').toLowerCase() === 'stable').length;

  const lastUpdatedDate = rows
    .map((r) => new Date(r.updatedAt ?? 0))
    .filter((d) => !Number.isNaN(d.getTime()))
    .sort((a, b) => b.getTime() - a.getTime())[0];

  const lastUpdated = lastUpdatedDate
    ? lastUpdatedDate.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      })
    : '—';

  return { totalModules, stableModules, lastUpdated };
};

export default function KpiCards() {
  const { totalModules, stableModules, lastUpdated } = useKpiData();

  return (
    <Grid container spacing={2}>
      {/* KPI summary */}
      <Grid item xs={12} md={4}>
        <StatCard
          icon={<CategoryIcon color="primary" />}
          label="Total modules"
          value={totalModules}
          help="Number of modules with a manifest"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatCard
          icon={<VerifiedIcon color="success" />}
          label="Stable modules"
          value={stableModules}
          help="Modules marked as stable in their manifests"
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <StatCard
          icon={<UpdateIcon color="info" />}
          label="Last updated"
          value={lastUpdated}
          help="Most recent manifest update date"
        />
      </Grid>

      {/* Module versions table/card */}
      <Grid item xs={12}>
        <ModuleVersionsCard />
      </Grid>
    </Grid>
  );
}
