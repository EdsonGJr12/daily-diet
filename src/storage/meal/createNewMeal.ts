import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { getAllMeals } from "./getAllMeals";
import { MealDTO } from "./mealDTO";

export async function createNewMeal(newMeal: MealDTO) {
    const meals = await getAllMeals();

    const mealsUpdated = [...meals, newMeal];

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsUpdated));
}