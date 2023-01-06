
import { useState } from "react";
import { useTheme } from "styled-components/native";
import Back from "../../assets/back.svg"
import { DietOption } from "../../components/DietOption";
import { Button } from "../../components/Form/Button";
import { Input } from "../../components/Form/Input";
import { InputLabel } from "../../components/Form/InputLabel";
import { StatisticCard } from "../../components/StatisticCard";

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

export function NewMeal() {

    const theme = useTheme();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [data, setDate] = useState("");
    const [hour, setHour] = useState("");

    const [onDietOption, setOnDietOption] = useState<"PENDING" | "YES" | "NO">("PENDING");

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
                        />
                    </FormControl>

                    <FormControl>
                        <DateContainer>
                            <InputElement>
                                <Input
                                    label="Data"
                                    onChangeText={setDate}
                                    value={data}
                                />
                            </InputElement>

                            <InputElement>
                                <Input
                                    label="Hora"
                                    onChangeText={setHour}
                                    value={hour}
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
                />

            </Content>
        </Container>
    )
}