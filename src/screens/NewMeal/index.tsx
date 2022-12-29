
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
                        />
                    </FormControl>

                    <FormControl>
                        <Input
                            label="Descrição"
                        />
                    </FormControl>

                    <FormControl>
                        <DateContainer>
                            <InputElement>
                                <Input
                                    label="Data"
                                />
                            </InputElement>

                            <InputElement>
                                <Input
                                    label="Hora"
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
                                    selected
                                />
                            </InputElement>

                            <InputElement>
                                <DietOption
                                    onDiet={false}
                                    selected={false}
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