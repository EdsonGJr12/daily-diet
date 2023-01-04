import { useTheme } from "styled-components/native";

import Back from "../../assets/back.svg"
import { Button } from "../../components/Form/Button";
import { Tag } from "../../components/Tag";

import {
    BackContainer,
    Container,
    Content,
    Header,
    Title,
    TitleContainer,
    TitleContent,
    DetailContent,
    DateTitle,
    DateValue,
    Buttons,
    Info
} from "./styles";

export function MealDetail() {

    const theme = useTheme();

    return (
        <Container>

            <Header>
                <TitleContainer>
                    <BackContainer>
                        <Back fill={theme.COLORS.GRAY_200} />
                    </BackContainer>

                    <Title>
                        Refeição
                    </Title>
                </TitleContainer>
            </Header>

            <Content>

                <Info>
                    <TitleContent>
                        Sanduíche
                    </TitleContent>

                    <DetailContent>
                        Sanduíche de pão integral com atum e salada de alface e tomate
                    </DetailContent>

                    <DateTitle>
                        Date e hora
                    </DateTitle>

                    <DateValue>
                        12/08/2022 ás 16:00
                    </DateValue>

                    <Tag onDiet={false} />

                </Info>

                <Buttons>
                    <Button
                        title="Editar refeição"
                    />
                </Buttons>

            </Content>
        </Container>
    )
}