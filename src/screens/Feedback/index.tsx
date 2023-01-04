import { Button } from "../../components/Form/Button";
import { Container, Title, Detail, ButtonContainer, DetailBold } from "./styles";

import FeedbackSuccess from "../../assets/feedback-success.svg"

export function Feedback() {
    return (
        <Container>
            <Title>
                Continue assim!
            </Title>

            <Detail>
                Você continua <DetailBold>dentro da dieta</DetailBold>. Muito bem!
            </Detail>

            <FeedbackSuccess />

            <ButtonContainer>
                <Button
                    title="Ir para a página inicial"
                />
            </ButtonContainer>
        </Container>
    )
}