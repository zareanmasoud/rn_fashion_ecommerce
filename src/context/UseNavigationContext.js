import {useContext} from 'react';
import {NavigationContext} from 'react-navigation';

export default function useNavigationContext() {
  return useContext(NavigationContext);
}
