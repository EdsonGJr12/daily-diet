import { TouchableOpacityProps } from "react-native";

import { Circle, Container, Title } from "./styles";

export interface OnDietProps {
    onDiet: boolean;
}
export interface DietOptionProps extends TouchableOpacityProps, OnDietProps {
    selected: boolean;
}
export function DietOption({ onDiet, selected, ...rest }: DietOptionProps) {
    return (
        <Container
            onDiet={onDiet}
            selected={selected}
            {...rest}
        >
            <Circle onDiet={onDiet} />
            <Title>
                {onDiet ? "Sim" : "Não"}
            </Title>
        </Container>
    )
}