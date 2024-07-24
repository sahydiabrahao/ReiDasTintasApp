import {SafeAreaView, View} from 'react-native';

import {ThemeProvider} from '@shopify/restyle';

import {TextInput} from '@components';
import {Box, Icon} from '@components';
import {theme} from '@theme';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ThemeProvider theme={theme}>
        <View
          style={{
            paddingHorizontal: 24,
          }}>
          <Box>
            <Icon name="logo" color="bluePrimary" size={80} />
          </Box>
          <TextInput />

          <Box>
            <Icon name="home" color="bluePrimary" size={40} />
            <Icon name="cart" color="bluePrimary" size={40} />
            <Icon name="contact" color="bluePrimary" size={40} />
          </Box>
        </View>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
