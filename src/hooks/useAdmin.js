
import { useAuth, useSynkrContext } from './';

export const useAdmin = () => {
  const { project } = useSynkrContext();
  const { auth } = useAuth();

  const isAdmin = auth.user._id === project.creator;

  return {
    isAdmin
  }
}