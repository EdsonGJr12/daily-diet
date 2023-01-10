import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { getAllMeals } from "./getAllMeals";

export async function deleteMealByName(mealName: string) {
    const meals = await getAllMeals();
    const mealsUpdated = meals.filter(meal => meal.name !== mealName);
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsUpdated));
}