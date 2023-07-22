import React, { ReactNode } from 'react'
import Main from "../pages/Main"
import About from "../pages/About"
import Skills from "../pages/Skills"
import Portfolio from '../pages/Portfolio'

type Route = {
    path: string;
    element: React.FC;
}

type Routes = {
    publicRoutes: Route[];
}

export const routes: Routes = {
    publicRoutes: [
        {path: "#home", element: Main},
        {path: "#about", element: About},
        {path: "#skills", element: Skills},
        {path: "#portfolio", element: Portfolio},
    ]
}