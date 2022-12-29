import styled, { css } from "styled-components/native";
import { StatisticCardTypeProps } from ".";


export const Container = styled.View<StatisticCardTypeProps>`
    width: 100%;

    ${({ theme, type }) => type === "info" && css`
        background-color: ${theme.COLORS.GRAY_600};
    `};

    ${({ theme, type }) => type === "success" && css`
        background-color: ${theme.COLORS.GREEN_LIGHT};
    `};

    ${({ theme, type }) => type === "danger" && css`
        background-color: ${theme.COLORS.RED_LIGHT};
    `};

    margin-bottom: 15px;
    padding: 15px;
    border-radius: 8px;

    align-items: center;
    
`;

export const Total = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_M}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: center;
    margin-bottom: 8px;
`;

export const Detail = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    text-align: center;
`;