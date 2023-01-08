import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEAL_COLLECTION } from "../storageConfig";
import { MealDTO } from "./mealDTO";

export async function getAllMeals() {
    const meals = await AsyncStorage.getItem(MEAL_COLLECTION);
    if (!meals) {
        return [] as MealDTO[];
    } else {
        const collection = JSON.parse(meals);
        return collection.map(element => {
            return {
                ...element,
                date: new Date(element.date)
            }
        }).sort((el1, el2) => el2.date.getTime() - el1.date.getTime());
    }
}