import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppTabBottomParamList, AuthTabBottomParamList} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthTabBottomParamList,
        AppTabBottomParamList {}
  }
}

export type AuthScreenProps<RoutName extends keyof AuthTabBottomParamList> =
  NativeStackScreenProps<AuthTabBottomParamList, RoutName>;

export type AppScreenProps<RoutName extends keyof AppTabBottomParamList> =
  NativeStackScreenProps<AppTabBottomParamList, RoutName>;
