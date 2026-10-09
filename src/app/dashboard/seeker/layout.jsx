import { requireRole } from '@/lib/core/session';
import React from 'react';
//add
const SeekerLayout = async({children}) => {
    await requireRole('seeker');
    return children;
};

export default SeekerLayout;