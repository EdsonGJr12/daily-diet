import { MealDTO } from "../storage/meal/mealDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            Statistics: undefined;
            MealManintenance: {
                operation: "NEW" | "EDIT",
                mealName?: string;
            };
            Feedback: {
                onDiet: boolean;
            };
            MealDetail: { name: string };
        }
    }
}

