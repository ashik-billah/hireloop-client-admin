import { requireRole } from '@/lib/core/session';
import React from 'react';
//add

const AdminDashboardLayout = async ({ children }) => {
    await requireRole('admin');
    return children;
};

export default AdminDashboardLayout;