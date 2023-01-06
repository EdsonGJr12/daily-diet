import { Container, Diet, Hour, Name, NameContainer, Divider, HourContainer } from "./styles";

interface MealItemProps {
    hour: string;
    name: string;
    onDiet: boolean;
}
export function MealItem({ hour, name, onDiet }: MealItemProps) {
    return (
        <Container>
            <HourContainer>
                <Hour>
                    {hour}
                </Hour>
                <Divider />
            </HourContainer>

            <NameContainer>
                <Name numberOfLines={1}>
                    {name}
                </Name>

                <Diet onDiet={onDiet} />
            </NameContainer>
        </Container>
    )
}