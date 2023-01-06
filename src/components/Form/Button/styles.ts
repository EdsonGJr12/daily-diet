import styled, { css } from "styled-components/native";
import { InverColorProps } from ".";

export const Container = styled.TouchableOpacity<InverColorProps>`
    width: 100%;
    height: 50px;
    border-radius: 6px;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme, invertColor }) => invertColor ? theme.COLORS.WHITE : theme.COLORS.GRAY_200};

    ${({ theme, invertColor }) => invertColor && css`
        border: 1px solid ${theme.COLORS.GRAY_100};
    `};
`;

export const IconContainer = styled.View`
    margin-right: 10px;
`;


export const ButtonTitle = styled.Text<InverColorProps>`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    color: ${({ theme, invertColor }) => invertColor ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};
`;