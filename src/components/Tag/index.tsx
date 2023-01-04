import { Container, Status, TagText } from "./styles";

export interface TagProps {
    onDiet: boolean;
}
export function Tag({ onDiet }: TagProps) {
    return (
        <Container>
            <Status onDiet={onDiet} />
            <TagText>
                {onDiet ? "dentro da dieta" : "fora da dieta"}
            </TagText>
        </Container>
    )
}