import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const routeConfig = createBrowserRouter([
    {
        path: '/',
        element: <App/>, 
    },
]);

root.render(<RouterProvider router={routeConfig} />);