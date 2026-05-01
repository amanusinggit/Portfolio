import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Profile from './Components/Profile.jsx';
import Skills from './Components/Skills.jsx';
import Socials from './Components/Socials.jsx';
import Projects from './Components/Projects.jsx';
import { Navigate } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
const routeConfig = createBrowserRouter([
    {
        path: '/',
        element: <App/>, 
        children: [
            {
                index: true,
                element: <Navigate to="/profile" replace />   // 👈 redirect
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "skills",
                element: <Skills />
            },
            {
                path: "socials",
                element: <Socials />
            },
            {
                path: "projects",
                element: <Projects />
            }
        ]
    },
]);

root.render(<RouterProvider router={routeConfig} />);