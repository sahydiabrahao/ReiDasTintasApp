import {Button, SafeAreaView} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';

import {Text} from '@components';
import {theme} from '@theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Button title="Entrar" />
        <Text preset="paragraphCaption" color="grayBlack">
          Rei das Tintas
        </Text>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
