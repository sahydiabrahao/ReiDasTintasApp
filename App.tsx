import {SafeAreaView} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';

import {Button, Text} from '@components';
import {theme} from '@theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <Button title="Entrar" />
        <Text preset="headingLarge" color="grayBlack">
          Rei das Tintas
        </Text>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
