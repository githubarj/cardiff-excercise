import React from 'react';
import Layout from './Components/Layout';
import Courses from './Pages/Courses';
import Programs from './Pages/Programs';
import { redirect } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    element: React.createElement(Layout),
    children: [
      {
        index: true,
        loader: async () => redirect('/Courses'),
      },
      {
        path: 'Courses',
        element: React.createElement(Courses),
      },
      {
        path: ':course',
        element: React.createElement(Programs)
      }
    ],
  },
];
