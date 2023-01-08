
import { useState } from "react";
import { useTheme } from "styled-components/native";

import Back from "../../assets/back.svg"
import { DietOption } from "../../components/DietOption";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { InputLabel } from "../../components/Form/InputLabel";

import { TextInputMask } from 'react-native-masked-text'

import { subHours } from "date-fns";

import {
    BackContainer,
    Container,
    Content,
    Form,
    DateContainer,
    DietOptions,
    FormControl,
    Header,
    InputElement,
    Title,
    TitleContainer
} from "./styles";
import { createNewMeal } from "../../storage/meal/createNewMeal";
import { useNavigation } from "@react-navigation/native";

export function NewMeal() {

    const theme = useTheme();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");

    const [onDietOption, setOnDietOption] = useState<"PENDING" | "YES" | "NO">("PENDING");

    const navigation = useNavigation();

    async function handleNewMeal() {

        const dayMonthYear = date.split("/");
        const hourMinute = hour.split(":");

        const dateFormat = `${dayMonthYear[2]}-${dayMonthYear[1]}-${dayMonthYear[0]}T${hourMinute[0]}:${hourMinute[1]}:00-03:00`;

        const mealDateUTC = new Date(dateFormat);

        const newMeal = {
            name,
            description,
            date: mealDateUTC,
            onDiet: onDietOption == "YES"
        };

        await createNewMeal(newMeal);

        navigation.navigate("Feedback", { onDiet: newMeal.onDiet });

    }

    return (
        <Container>

            <Header>
                <TitleContainer>
                    <BackContainer>
                        <Back fill={theme.COLORS.GRAY_200} />
                    </BackContainer>

                    <Title>
                        Nova refeição
                    </Title>
                </TitleContainer>
            </Header>

            <Content>

                <Form>
                    <FormControl>
                        <Input
                            label="Nome"
                            onChangeText={setName}
                            value={name}
                        />
                    </FormControl>

                    <FormControl>
                        <Input
                            label="Descrição"
                            onChangeText={setDescription}
                            value={description}
                            multiline
                            numberOfLines={5}
                            textAlignVertical="top"

                        />
                    </FormControl>

                    <FormControl>
                        <DateContainer>
                            <InputElement>
                                <TextInputMask
                                    type={'datetime'}
                                    options={{
                                        format: 'DD/MM/YYYY'
                                    }}
                                    onChangeText={setDate}
                                    value={date}
                                    customTextInput={Input}
                                    customTextInputProps={{
                                        label: "Data"
                                    }}
                                />

                            </InputElement>

                            <InputElement>
                                <TextInputMask
                                    type={'datetime'}
                                    options={{
                                        format: 'HH:MM'
                                    }}
                                    onChangeText={setHour}
                                    value={hour}
                                    customTextInput={Input}
                                    customTextInputProps={{
                                        label: "Hora"
                                    }}
                                />


                            </InputElement>
                        </DateContainer>
                    </FormControl>

                    <FormControl>
                        <InputLabel label="Está dentro da dieta?" />
                        <DietOptions>
                            <InputElement>
                                <DietOption
                                    onDiet
                                    selected={onDietOption === "YES"}
                                    onPress={() => setOnDietOption("YES")}
                                />
                            </InputElement>

                            <InputElement>
                                <DietOption
                                    onDiet={false}
                                    selected={onDietOption === "NO"}
                                    onPress={() => setOnDietOption("NO")}
                                />
                            </InputElement>
                        </DietOptions>
                    </FormControl>
                </Form>

                <Button
                    title="Cadastrar refeição"
                    onPress={handleNewMeal}
                />

            </Content>
        </Container>
    )
}