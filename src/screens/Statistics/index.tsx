
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import Back from "../../assets/back.svg"
import { StatisticCard } from "../../components/StatisticCard";
import { maskPercent } from "../../global/maskPercent";
import { PERCENT_REFERENCE } from "../../global/percent";
import { getAllMeals } from "../../storage/meal/getAllMeals";
import { MealDTO } from "../../storage/meal/mealDTO";

import {
    BackContainer,
    Container,
    Content,
    ContentTitle,
    Header,
    Percent,
    PercentContainer,
    PercentText,
    StatisticCardContainer,
    StatisticCardElement
} from "./styles";

export function Statistics() {

    const [meals, setMeals] = useState<MealDTO[]>([]);

    const totalOfMeals = meals.length;
    const totalOnDietMeals = meals.filter(meal => meal.onDiet).length;
    const totalOffDietMeals = meals.filter(meal => !meal.onDiet).length;
    const percentageOfMealsInDiet = meals.length !== 0 ? (totalOnDietMeals / totalOfMeals) * 100 : 0;
    const aboveReference = percentageOfMealsInDiet > PERCENT_REFERENCE;

    const bestSequenceOnDiet = getBestSequence();

    const theme = useTheme();

    function getBestSequence() {
        let bestSequence = 0;

        let currentCounter = 0;

        for (let indexMeal = 0; indexMeal < meals.length; indexMeal++) {

            const currentMeal = meals[indexMeal];
            const nextMeal = meals[indexMeal + 1];

            if (!currentMeal.onDiet) {
                currentCounter = 0;
                continue;
            }

            if (currentMeal.onDiet && !nextMeal) {
                currentCounter += 1;
                if (currentCounter > bestSequence) {
                    bestSequence = currentCounter;
                }
                continue;
            }

            if (currentMeal.onDiet && nextMeal.onDiet) {
                currentCounter += 1;
                if (currentCounter > bestSequence) {
                    bestSequence = currentCounter;
                }
                continue;
            }

            if (currentMeal.onDiet && !nextMeal.onDiet) {
                currentCounter += 1;
                if (currentCounter > bestSequence) {
                    bestSequence = currentCounter;
                }
                currentCounter = 0;
                continue;
            }
        }

        return bestSequence;
    }

    useEffect(() => {
        async function loadMeals() {
            const meals = await getAllMeals();

            setMeals(meals);
        }
        loadMeals();
    }, []);

    return (
        <Container aboveReference={aboveReference}>

            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />

            <Header>
                <BackContainer>
                    <Back fill={aboveReference ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK} />
                </BackContainer>

                <PercentContainer>
                    <Percent>
                        {maskPercent(percentageOfMealsInDiet)}
                    </Percent>

                    <PercentText>
                        das refeições dentro da dieta
                    </PercentText>
                </PercentContainer>
            </Header>

            <Content>
                <ContentTitle>
                    Estatísticas gerais
                </ContentTitle>

                <StatisticCard
                    type="info"
                    total={bestSequenceOnDiet}
                    detail="melhor sequência de pratos dentro da dieta"
                />

                <StatisticCard
                    type="info"
                    total={totalOfMeals}
                    detail="refeições registradas"
                />

                <StatisticCardContainer>
                    <StatisticCardElement>
                        <StatisticCard
                            type="success"
                            total={totalOnDietMeals}
                            detail="refeições dentro da dieta"
                        />
                    </StatisticCardElement>

                    <StatisticCardElement>
                        <StatisticCard
                            type="danger"
                            total={totalOffDietMeals}
                            detail="refeições fora da dieta"
                        />
                    </StatisticCardElement>
                </StatisticCardContainer>

            </Content>
        </Container>
    )
}