import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { getAllMeals } from "./getAllMeals";
import { MealDTO } from "./mealDTO";

export async function updateMealByName(meal: MealDTO) {
    const meals = await getAllMeals();
    const mealsUpdated = meals.map(element => {
        if (element.name === meal.name) {
            return meal;
        } else {
            return element;
        }
    });
    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsUpdated));
}