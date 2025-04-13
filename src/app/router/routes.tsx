import { Navigate, RouteObject } from 'react-router-dom';

import { BaseLayout } from '@/widgets/layouts/base-layout';
import { ProtectedLayout } from '@/widgets/layouts/protected-layout';
import { PublicLayout } from '@/widgets/layouts/public-layout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
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
            element: <div>Profile</div>,
          },
          {
            path: '/users',
            element: <div>Users Page</div>,
          },
        ],
      },
    ],
  },
];

export { routes };
