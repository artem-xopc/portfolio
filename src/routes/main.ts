import React, { ReactNode } from 'react';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Banner from '../components/Banner';

type Route = {
  path: string;
  element: React.FC;
};

type Routes = {
  publicRoutes: Route[];
};

export const routes: Routes = {
  publicRoutes: [
    { path: '#home', element: Banner },
    { path: '#skills', element: Skills },
    { path: '#portfolio', element: Portfolio },
  ],
};
