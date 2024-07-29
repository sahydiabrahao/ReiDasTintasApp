import {OrderData, OrderProvider, ToastProvider} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {Router} from '@routes';
import {theme} from '@theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <OrderProvider>
          <ToastProvider>
            <Router />
            <Toast />
            <OrderData />
          </ToastProvider>
        </OrderProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
