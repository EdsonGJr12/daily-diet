import { Container, Header, NewMeal, StatisticsCard, StatisticPercent, StatisticText, StatisticContainer, OpenContainer, NewMealTitle, NewMealButton, NewMealButtonText } from "./styles";

import Logo from "../../assets/logo.svg";
import Profile from "../../assets/profile.svg";
import Open from "../../assets/open.svg";
import Add from "../../assets/add.svg";
import { useState } from "react";
import { SectionList } from "react-native";
import { MealHeader } from "../../components/MealHeader";
import { MealItem } from "../../components/MealItem";

const DATA = [
    {
        title: "12.08.22",
        data: [
            {
                hour: "20:00",
                name: "X-tudo",
                diet: false
            },
            {
                hour: "16:00",
                name: "Whey protein com leite",
                diet: true
            },
            {
                hour: "12:30",
                name: "Salada cesar com frango ao molho madeira",
                diet: true
            },
            {
                hour: "09:30",
                name: "Vitamina de banan com whey protein",
                diet: true
            }
        ]
    },
    {
        title: "11.08.22",
        data: [
            {
                hour: "20:00",
                name: "X-tudo",
                diet: false
            },
            {
                hour: "16:00",
                name: "Whey protein com leite",
                diet: true
            },
            {
                hour: "12:30",
                name: "Salada cesar com frango ao molho madeira",
                diet: true
            },
            {
                hour: "09:30",
                name: "Vitamina de banan com whey protein",
                diet: true
            }
        ]
    },
    {
        title: "09.08.22",
        data: [
            {
                hour: "20:00",
                name: "X-tudo",
                diet: false
            },
            {
                hour: "16:00",
                name: "Whey protein com leite",
                diet: true
            },
            {
                hour: "12:30",
                name: "Salada cesar com frango ao molho madeira",
                diet: true
            },
            {
                hour: "09:30",
                name: "Vitamina de banana com whey protein",
                diet: true
            }
        ]
    }
];

export function Home() {

    const [meals, setMeals] = useState(DATA);

    return (
        <Container>
            <Header>
                <Logo />
                <Profile />
            </Header>

            <StatisticsCard>
                <OpenContainer>
                    <Open />
                </OpenContainer>

                <StatisticContainer>
                    <StatisticPercent>
                        90,86%
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

                <NewMealButton>
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
                        diet={item.diet}
                    />
                )}
                showsVerticalScrollIndicator={false}
            />

        </Container>
    )
}