import { Button } from "../../components/Form/Button";
import { Container, Title, Detail, ButtonContainer, DetailBold } from "./styles";

import FeedbackSuccess from "../../assets/feedback-success.svg";
import FeedbackWarning from "../../assets/feedback-warning.svg";

import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "react-native";

interface RouteParams {
    onDiet: boolean;
}

export function Feedback() {

    const navigation = useNavigation();

    const route = useRoute();
    const { onDiet } = route.params as RouteParams;

    function handleHome() {
        navigation.navigate("Home");
    }

    return (
        <Container>

            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />

            <Title onDiet={onDiet}>
                {onDiet ? "Continue assim!" : "Que pena!"}
            </Title>

            <Detail>
                {onDiet ? (
                    <>
                        Você continua <DetailBold>dentro da dieta</DetailBold>. Muito bem!
                    </>
                ) : (
                    <>
                        Você <DetailBold>saiu da dieta</DetailBold> dessa vez,
                        mas continue se esforçando e não desista. Muito bem!
                    </>
                )}
            </Detail>

            {onDiet ? <FeedbackSuccess /> : <FeedbackWarning />}

            <ButtonContainer>
                <Button
                    title="Ir para a página inicial"
                    onPress={handleHome}
                />
            </ButtonContainer>
        </Container>
    )
}