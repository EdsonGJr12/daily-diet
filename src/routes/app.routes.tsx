import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feedback } from "../screens/Feedback";

import { Home } from "../screens/Home";
import { MealDetail } from "../screens/MealDetail";
import { MealManintenance } from "../screens/ MealManintenance";
import { Statistics } from "../screens/Statistics";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right"
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="Statistics"
                component={Statistics}
            />
            <Stack.Screen
                name="MealManintenance"
                component={MealManintenance}
            />
            <Stack.Screen
                name="Feedback"
                component={Feedback}
            />
            <Stack.Screen
                name="MealDetail"
                component={MealDetail}
            />
        </Stack.Navigator>
    )
}