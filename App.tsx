import {store} from '@redux';
import {ToastProvider} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import {Toast} from '@components';
import {Router} from '@routes';
import {theme} from '@theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <Router />
            <Toast />
          </ToastProvider>
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
