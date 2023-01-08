
import { useCallback, useEffect, useState } from "react";
import { SectionList, StatusBar } from "react-native";

import Logo from "../../assets/logo.svg";
import Profile from "../../assets/profile.svg";
import Open from "../../assets/open.svg";
import Add from "../../assets/add.svg";

import { MealHeader } from "../../components/MealHeader";
import { MealItem } from "../../components/MealItem";

import { useFocusEffect, useNavigation } from "@react-navigation/native";

import {
    Container,
    Header,
    NewMeal,
    StatisticsCard,
    StatisticPercent,
    StatisticText,
    StatisticContainer,
    OpenContainer,
    NewMealTitle,
    NewMealButton,
    NewMealButtonText,
    ListEmpty,
    ListEmptyMessage
} from "./styles";
import { PERCENT_REFERENCE } from "../../global/percent";
import { maskPercent } from "../../global/maskPercent";
import { getAllMeals } from "../../storage/meal/getAllMeals";
import { MealDTO } from "../../storage/meal/mealDTO";
import { format } from "date-fns";
import theme from "../../theme";

interface MealProps {
    hour: string;
    name: string;
    onDiet: boolean;
}

export function Home() {

    const [meals, setMeals] = useState<MealDTO[]>([]);
    const mealsGrouped = groupByDate(meals);

    const percentageOfMealsInDiet = meals.length !== 0 ? (meals.filter(meal => meal.onDiet).length / meals.length) * 100 : 0;
    const aboveReference = percentageOfMealsInDiet > PERCENT_REFERENCE;

    const navigation = useNavigation();

    function handleNewMeal() {
        navigation.navigate("NewMeal");
    }

    function groupByDate(meals: MealDTO[]) {
        if (meals.length === 0) {
            return [];
        } else {
            const allDates = new Set<string>();
            meals.forEach(meal => allDates.add(format(meal.date, 'dd.MM.yy')));

            const dates = Array.from(allDates);

            const mealsGrouped = dates.map(date => {
                return {
                    title: date,
                    data: meals.filter(meal => format(meal.date, 'dd.MM.yy') === date)
                }
            });

            return mealsGrouped;
        }
    }

    function handleStatistics() {
        navigation.navigate("Statistics");
    }

    useFocusEffect(
        useCallback(() => {
            async function loadMeals() {
                const meals = await getAllMeals();

                setMeals(meals);
            }
            loadMeals();
        }, [])
    );

    return (
        <Container>

            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />

            <Header>
                <Logo />
                <Profile />
            </Header>

            <StatisticsCard aboveReference={aboveReference} onPress={handleStatistics}>
                <OpenContainer>
                    <Open fill={aboveReference ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK} />
                </OpenContainer>

                <StatisticContainer>
                    <StatisticPercent>
                        {maskPercent(percentageOfMealsInDiet)}
                    </StatisticPercent>

                    <StatisticText>
                        das refeições dentro da dieta
                    </StatisticText>
                </StatisticContainer>
            </StatisticsCard>

            <NewMeal>
                <NewMealTitle>
                    Refeições
                </NewMealTitle>

                <NewMealButton onPress={handleNewMeal}>
                    <Add />
                    <NewMealButtonText>
                        Nova refeição
                    </NewMealButtonText>
                </NewMealButton>
            </NewMeal>

            <SectionList
                sections={mealsGrouped}
                keyExtractor={(_, index) => String(index)}
                renderSectionHeader={({ section: { title } }) => (
                    <MealHeader title={title} />
                )}
                renderItem={({ item }) => (
                    <MealItem
                        date={item.date}
                        name={item.name}
                        onDiet={item.onDiet}
                    />
                )}
                contentContainerStyle={mealsGrouped.length == 0 && { flex: 1 }}
                ListEmptyComponent={
                    <ListEmpty>
                        <ListEmptyMessage>
                            Nenhum refeição registrada
                        </ListEmptyMessage>
                    </ListEmpty>
                }
                showsVerticalScrollIndicator={false}
            />

        </Container>
    )
}