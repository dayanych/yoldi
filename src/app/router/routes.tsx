import { Navigate, RouteObject } from 'react-router-dom';

import { AccountPage, AccountsPage, SignInPage, SignUpPage } from '@/pages';
import { BaseLayout, PublicLayout } from '@/widgets';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/accounts',
        element: <AccountsPage />,
      },
      {
        path: '/accounts/:slug',
        element: <AccountPage />,
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
            element: <SignInPage />,
          },
          {
            path: '/sign-up',
            element: <SignUpPage />,
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
