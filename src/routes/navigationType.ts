import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamList, AuthtackParamList} from '@routes';
import {RootStackParamList} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type AppScreenProps<RoutName extends keyof AppStackParamList> =
  NativeStackScreenProps<RootStackParamList, RoutName>;

export type AuthScreenProps<RoutName extends keyof AuthtackParamList> =
  NativeStackScreenProps<RootStackParamList, RoutName>;
