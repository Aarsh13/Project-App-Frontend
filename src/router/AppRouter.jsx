import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AuthLayout } from '../auth/layout/AuthLayout';
import { AdminLayout, LandingLayout } from '../Synkr/layout';
import AuthRoutes from '../auth/routes/AuthRoutes';
import { DashboardRoutes, ProjectsRoutes, LandingRoutes } from '../Synkr/routes/SynkrRoutes';
import { ErrorPage } from '../Synkr/pages';

const AppRouter = [
  {
    path: '/',
    element:
      <PublicRoute>
        <LandingLayout />
      </PublicRoute>,
    errorElement: <ErrorPage />,
    children: LandingRoutes,
  },
  {
    path: '/auth',
    element:
      <PublicRoute>
        <AuthLayout />
      </PublicRoute>,
    errorElement: <ErrorPage />,
    children: AuthRoutes,
  },
  {
    path: '/dashboard',
    element:
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>,
    children: DashboardRoutes,
  },
  {
    path: '/projects',
    element:
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>,
    children: ProjectsRoutes,
  },
]

export default AppRouter;