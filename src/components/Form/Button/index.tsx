import { Container, IconContainer, ButtonTitle } from "./styles";

import EditIcon from "../../../assets/edit-icon.svg";
import DeleteIcon from "../../../assets/delete-icon.svg";
import { useTheme } from "styled-components/native";
import { TouchableOpacityProps } from "react-native";

export interface InverColorProps {
    invertColor?: boolean;
}

interface ButtonProps extends TouchableOpacityProps, InverColorProps {
    title: string;
    icon?: 'edit' | 'delete';

}
export function Button({ title, icon, invertColor, ...rest }: ButtonProps) {

    const theme = useTheme();

    const Icon = getIcon();

    function getIcon() {
        switch (icon) {
            case 'edit':
                return EditIcon;
            case "delete":
                return DeleteIcon;
            default:
                return null;
        }
    }

    return (
        <Container invertColor={invertColor} {...rest}>
            <>
                {icon ? (
                    <IconContainer>
                        <Icon fill={invertColor ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE} />
                    </IconContainer>
                ) : null}

                <ButtonTitle invertColor={invertColor}>
                    {title}
                </ButtonTitle>
            </>
        </Container>
    )
}