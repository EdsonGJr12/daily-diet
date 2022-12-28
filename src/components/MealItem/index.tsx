import { Container, Diet, Hour, Name, NameContainer, Divider, HourContainer } from "./styles";

interface MealItemProps {
    hour: string;
    name: string;
    diet: boolean;
}
export function MealItem({ hour, name, diet }: MealItemProps) {
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

                <Diet diet={diet} />
            </NameContainer>
        </Container>
    )
}