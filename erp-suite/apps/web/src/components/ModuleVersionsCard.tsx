import React from 'react';
import { manifests } from '../../../versioning/registry';

export const ModuleVersionsCard = () => {
  return (
    <div className="dashboard-card">
      <h3>Module Versions</h3>
      <table className="version-table">
        <thead>
          <tr>
            <th>Module</th>
            <th>Version</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(manifests).map(([moduleKey, manifest]) => (
            <tr key={moduleKey}>
              <td>{manifest.name}</td>
              <td>{manifest.version}</td>
              <td>{manifest.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
