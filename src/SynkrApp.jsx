import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { AuthProvider } from './auth/context';
import { SynkrProvider } from './Synkr/context/SynkrProvider';

const router = createBrowserRouter(AppRouter);

const SynkrApp = () => {
  return (
    <AuthProvider>
      <SynkrProvider>
        <RouterProvider router={router} />
      </SynkrProvider>
    </AuthProvider>
  )
}

export default SynkrApp;