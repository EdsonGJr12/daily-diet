import { format } from "date-fns";
import { TouchableOpacityProps } from "react-native";

import {
    Container,
    Diet,
    Hour,
    Name,
    NameContainer,
    Divider,
    HourContainer
} from "./styles";

interface MealItemProps extends TouchableOpacityProps {
    date: Date;
    name: string;
    onDiet: boolean;
}
export function MealItem({ date, name, onDiet, ...rest }: MealItemProps) {

    return (
        <Container {...rest}>
            <HourContainer>
                <Hour>
                    {format(date, 'HH:mm')}
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