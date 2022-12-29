import { Circle, Container, Title } from "./styles";

export interface OnDietProps {
    onDiet: boolean;
}
interface DietOptionProps extends OnDietProps {
    selected: boolean;
}
export function DietOption({ onDiet, selected }: DietOptionProps) {
    return (
        <Container>
            <Circle onDiet={onDiet} />
            <Title>
                {onDiet ? "Sim" : "Não"}
            </Title>
        </Container>
    )
}