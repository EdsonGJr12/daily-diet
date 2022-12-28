import { Container, Title } from "./styles";

interface MealHeaderProps {
    title: string;
}
export function MealHeader({ title }: MealHeaderProps) {
    return (
        <Container>
            <Title>
                {title}
            </Title>
        </Container>
    )
}