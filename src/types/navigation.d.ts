
import * as ROUTES from '../Navigator/Routes';
import { NavigationProp } from '@react-navigation/native';

// ROOT STACK
export type RootParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.DETAILS]: undefined;
};

export type NavigationProps = NavigationProp<RootParamList>;