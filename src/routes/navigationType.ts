import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamList, AuthtackParamList} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthtackParamList, AppStackParamList {}
  }
}

export type AuthScreenProps<RoutName extends keyof AuthtackParamList> =
  NativeStackScreenProps<AuthtackParamList, RoutName>;

export type AppScreenProps<RoutName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RoutName>;
