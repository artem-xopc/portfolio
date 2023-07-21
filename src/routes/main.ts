// Basic imports
import React, { ReactNode } from 'react'
import NotFoundPage from '../pages/NotFoundPage'

// Public routes
import Main from "../pages/Main"
import About from "../pages/About"
import Articles from "../pages/Articles"
import Skills from "../pages/Skills"

// Private routes
import Users from "../pages/Users"
import Portfolio from '../pages/Portfolio'

type Route = {
    path: string;
    element: React.FC;
}

type Routes = {
    publicRoutes: Route[];
    privateRoutes: Route[];
    '': ReactNode;
}

export const routes: Routes = {
    publicRoutes: [
        {path: "/", element: Main},
        {path: "/about", element: About},
        {path: "/articles", element: Articles},
        {path: "/skills", element: Skills},
        {path: "/portfolio", element: Portfolio},
    ],
    privateRoutes: [],
    '': NotFoundPage()
}

// export const publicRoutes = [
//     {path: "/", element: Main},
//     {path: "/about", element: About},
//     {path: "/articles", element: Articles},
//     {path: "/shop", element: Shop},
// ]

export const privateRoutes = [
    {path: "/users", element: Users},
]