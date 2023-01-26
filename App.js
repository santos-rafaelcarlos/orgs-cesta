import { StatusBar, SafeAreaView, View, ScrollView } from 'react-native';
import Cesta from './src/views/cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import mock from './src/mocks/cesta';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MonteserratRegular": Montserrat_400Regular,
    "MonteserratBold": Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (!fonteCarregada) {
      return SplashScreen.hideAsync();
    }
  }, [fonteCarregada])

  if (!fonteCarregada) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView >
  );
}

