import {Button, SafeAreaView} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';

import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Button title="Entrar" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
