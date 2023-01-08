import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold
} from '@expo-google-fonts/nunito-sans';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { AppRoutes } from './src/routes/app.routes';
import theme from './src/theme';

import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function App() {

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

