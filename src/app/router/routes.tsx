import { Navigate, RouteObject } from 'react-router-dom';

import { ProfilePage } from '@/pages';
import { BaseLayout, ProtectedLayout, PublicLayout } from '@/widgets';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/users',
        element: <div>Users Page</div>,
      },
      {
        path: '/users/:slug',
        element: <div>User Page</div>,
      },
      {
        path: '/',
        element: <PublicLayout />,
        children: [
          {
            path: '/',
            element: <Navigate to="/sign-in" />,
          },
          {
            path: '/sign-in',
            element: <div>Sign In Page</div>,
          },
          {
            path: '/sign-up',
            element: <div>Sign Up Page</div>,
          },
        ],
      },
      {
        path: '/',
        element: <ProtectedLayout />,
        children: [
          {
            path: '/',
            element: <Navigate to="/profile" />,
          },
          {
            path: '/profile',
            element: <ProfilePage />,
          },
        ],
      },
      {
        path: '*',
        element: <div>404 Page</div>,
      },
    ],
  },
];

export { routes };
