import React from 'react';

// Import routes
const Frontend = React.lazy(() => import('../../components/frontend/Frontend'))
const ReadTodo = React.lazy(() => import('../../components/frontend/Todos/ReadTodo'))



// Routes
export default [
    {
        path: '/',
        component: Frontend,
        exact: true,
        isProtected: false,
    },
    {
        path: '/todos/:recordId',
        component: ReadTodo,
        exact: true,
        isProtected: false,
    }
]