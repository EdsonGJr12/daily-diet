
import { useTheme } from "styled-components/native";
import Back from "../../assets/back.svg"
import { StatisticCard } from "../../components/StatisticCard";

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

    const theme = useTheme();

    return (
        <Container>

            <Header>
                <BackContainer>
                    <Back fill={theme.COLORS.GREEN_DARK} />
                </BackContainer>

                <PercentContainer>
                    <Percent>
                        90,86%
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
                    total={22}
                    detail="melhor sequência de pratos dentro da dieta"
                />

                <StatisticCard
                    type="info"
                    total={109}
                    detail="refeições registradas"
                />

                <StatisticCardContainer>
                    <StatisticCardElement>
                        <StatisticCard
                            type="success"
                            total={99}
                            detail="refeições dentro da dieta"
                        />
                    </StatisticCardElement>

                    <StatisticCardElement>
                        <StatisticCard
                            type="danger"
                            total={10}
                            detail="refeições fora da dieta"
                        />
                    </StatisticCardElement>
                </StatisticCardContainer>

            </Content>
        </Container>
    )
}