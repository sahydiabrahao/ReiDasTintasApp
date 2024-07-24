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
          <Box
            padding="s4"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Box alignItems="center" justifyContent="center">
              <Icon name="menu" color="bluePrimary" size={40} />
            </Box>
            <Box>
              <Icon name="logo" color="bluePrimary" size={80} />
            </Box>
          </Box>
          <TextInput
            boxProps={{marginBottom: 's20'}}
            RightComponent={<Icon name="search" color="gray3" />}
          />

          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
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
