import React from 'react';

// Import routes
const Backoffice = React.lazy(() => import('../../components/backoffice/Backoffice'))



// Routes
export default [
    {
        path: '/',
        component: Backoffice,
        exact: true,
        isProtected: false,
    }
]