import { Container, ButtonTitle } from "./styles";

interface ButtonProps {
    title: string;
}
export function Button({ title }: ButtonProps) {
    return (
        <Container>
            <ButtonTitle>
                {title}
            </ButtonTitle>
        </Container>
    )
}