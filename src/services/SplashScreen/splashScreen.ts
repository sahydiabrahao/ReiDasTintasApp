import BootSplash from 'react-native-bootsplash';

export async function hideSplashScreen() {
  try {
    const isVisible = await BootSplash.isVisible();
    if (isVisible) {
      BootSplash.hide({fade: true});
    }
  } catch (error) {
    BootSplash.hide();
  }
}
