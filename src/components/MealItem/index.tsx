import { format } from "date-fns";

import ptBR from "date-fns/locale/pt-BR"

import { Container, Diet, Hour, Name, NameContainer, Divider, HourContainer } from "./styles";

interface MealItemProps {
    date: Date;
    name: string;
    onDiet: boolean;
}
export function MealItem({ date, name, onDiet }: MealItemProps) {

    return (
        <Container>
            <HourContainer>
                <Hour>
                    {format(date, 'HH:mm:ss')}
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