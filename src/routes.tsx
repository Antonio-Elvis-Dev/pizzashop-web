import { createBrowserRouter } from 'react-router-dom'

import { CustomRouteObject } from './@types/CustomRouteObject'
import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { Dashboard } from './pages/app/dashboard'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'

const routes: CustomRouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <Dashboard />, handle: { title: 'Dashboard' } }],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn />, handle: { title: 'Login' } },
      { path: '/sign-up', element: <SignUp />, handle: { title: 'Login' } },
    ],
  },
]

export const router = createBrowserRouter(routes)
