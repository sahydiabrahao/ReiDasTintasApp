import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '@routes';

export function useResetNavigationHome() {
  const navigation = useNavigation();

  function reset(params: RootStackParamList['HomeScreen']) {
    navigation.reset({
      index: 0,
      routes: [{name: 'HomeScreen', params}],
    });
  }

  return {reset};
}
