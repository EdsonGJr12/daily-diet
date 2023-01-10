import { getAllMeals } from "./getAllMeals";

export async function getMealByName(name: string) {
    const meals = await getAllMeals();
    return meals.find(meal => meal.name === name);
}