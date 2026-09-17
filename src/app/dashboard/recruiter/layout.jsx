import { requireRole } from '@/lib/core/session';
import React from 'react';
//add

const RecruiterLayout = async ({ children }) => {
    await requireRole('recruiter')
    return children;
};

export default RecruiterLayout;