import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { AppRoutes } from './src/routes/app.routes';
import { Feedback } from './src/screens/Feedback';
import { Home } from './src/screens/Home';
import { MealDetail } from './src/screens/MealDetail';
import { NewMeal } from './src/screens/NewMeal';
import { Statistics } from './src/screens/Statistics';
import theme from './src/theme';

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

