import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root';
import Home from '../Pages/Home';
import AllApps from '../Component/AllApps/AllApps';
import HeroSection from '../Component/HeroSection/HeroSection';
import AppDetails from '../Component/AppDetails/AppDetails';
import InstalledApps from '../Component/InstalledApps/InstalledApps';
import ErrorPages from '../Component/ErrorPages/ErrorPages';


const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        errorElement: <ErrorPages></ErrorPages>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/apps',
                Component: AllApps
            },
            {
                path: '/appDeatails/:id',
                Component: AppDetails
            },
            {
                path: '/installedapps',
                Component: InstalledApps
            }
        ]
    }
])

export default router;