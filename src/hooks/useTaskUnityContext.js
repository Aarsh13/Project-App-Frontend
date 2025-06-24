import { useContext } from 'react';
import { SynkrContext } from '../Synkr/context';

export const useSynkrContext = () => {
  return useContext(SynkrContext);
}