import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppTabBottomParamList, AuthTabBottomParamList} from '@routes';

import {AppStackParamList} from './AppStack';
import {AuthStackParamList} from './AuthStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, RouteName>;

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;

export type AuthTabScreenProps<RoutName extends keyof AuthTabBottomParamList> =
  NativeStackScreenProps<AuthTabBottomParamList, RoutName>;

export type AppTabcreenProps<RoutName extends keyof AppTabBottomParamList> =
  NativeStackScreenProps<AppTabBottomParamList, RoutName>;
