
import { useState } from "react";
import { SectionList } from "react-native";

import Logo from "../../assets/logo.svg";
import Profile from "../../assets/profile.svg";
import Open from "../../assets/open.svg";
import Add from "../../assets/add.svg";

import { MealHeader } from "../../components/MealHeader";
import { MealItem } from "../../components/MealItem";

import { useNavigation } from "@react-navigation/native";

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

interface MealProps {
    hour: string;
    name: string;
    onDiet: boolean;
}

const DATA = [
    {
        title: "12.08.22",
        data: [
            {
                hour: "20:00",
                name: "X-tudo",
                onDiet: false
            },
            {
                hour: "16:00",
                name: "Whey protein com leite",
                onDiet: false
            },
            {
                hour: "12:30",
                name: "Salada cesar com frango ao molho madeira",
                onDiet: false
            },
            {
                hour: "09:30",
                name: "Vitamina de banan com whey protein",
                onDiet: false
            }
        ]
    },
    {
        title: "11.08.22",
        data: [
            {
                hour: "20:00",
                name: "X-tudo",
                onDiet: false
            },
            {
                hour: "16:00",
                name: "Whey protein com leite",
                onDiet: true
            },
            {
                hour: "12:30",
                name: "Salada cesar com frango ao molho madeira",
                onDiet: true
            },
            {
                hour: "09:30",
                name: "Vitamina de banan com whey protein",
                onDiet: true
            }
        ]
    },
    {
        title: "09.08.22",
        data: [
            {
                hour: "20:00",
                name: "X-tudo",
                onDiet: false
            },
            {
                hour: "16:00",
                name: "Whey protein com leite",
                onDiet: false
            },
            {
                hour: "12:30",
                name: "Salada cesar com frango ao molho madeira",
                onDiet: false
            },
            {
                hour: "09:30",
                name: "Vitamina de banana com whey protein",
                onDiet: false
            }
        ]
    }
];

export function Home() {

    const [meals, setMeals] = useState([]);

    const allMeals = meals.map(meal => meal.data)
        .reduce((all, element) => [...all, ...element], []);
    const percentageOfMealsInDiet = allMeals.length !== 0 ? (allMeals.filter(meal => meal.onDiet).length / allMeals.length) * 100 : 0;
    const aboveReference = percentageOfMealsInDiet > PERCENT_REFERENCE;

    const navigation = useNavigation();

    function handleNewMeal() {
        navigation.navigate("NewMeal");
    }

    console.log(percentageOfMealsInDiet)

    return (
        <Container>
            <Header>
                <Logo />
                <Profile />
            </Header>

            <StatisticsCard aboveReference={aboveReference}>
                <OpenContainer>
                    <Open />
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
                sections={meals}
                keyExtractor={(_, index) => String(index)}
                renderSectionHeader={({ section: { title } }) => (
                    <MealHeader title={title} />
                )}
                renderItem={({ item }) => (
                    <MealItem
                        hour={item.hour}
                        name={item.name}
                        onDiet={item.onDiet}
                    />
                )}
                contentContainerStyle={meals.length == 0 && { flex: 1 }}
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