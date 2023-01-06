import styled, { css } from "styled-components/native";
import { DietOptionProps, OnDietProps } from ".";


export const Container = styled.TouchableOpacity<DietOptionProps>`
    width: 100%;
    height: 50px;

    flex-direction: row;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};

    ${({ theme, onDiet, selected }) => onDiet && selected && css`
        border: 1px solid ${theme.COLORS.GREEN_DARK};
        background-color: ${theme.COLORS.GREEN_LIGHT};
        border-radius: 6px;
    `};

    ${({ theme, onDiet, selected }) => !onDiet && selected && css`
        border: 1px solid ${theme.COLORS.RED_DARK};
        background-color: ${theme.COLORS.RED_LIGHT};
        border-radius: 6px;
    `};
`;

export const Circle = styled.View<OnDietProps>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 5px;

    background-color: ${({ theme, onDiet }) => onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;