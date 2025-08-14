// c:\Users\hp\Downloads\ERP React\erp-suite\apps\web\src\routes\index.tsx
import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/Dashboard';
import Login from '../modules/users/pages/Login';
import ProtectedRoute from '../components/ProtectedRoute';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </>
  )
);