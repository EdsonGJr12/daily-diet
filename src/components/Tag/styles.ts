import styled, { css } from 'styled-components/native';
import { TagProps } from '.';

export const Container = styled.View`
    width: 145px;
    height: 35px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600};
    border-radius: 1000px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};

    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const Status = styled.View<TagProps>`
    width: 8px;
    height: 8px;
    border-radius: 4px;

    ${({ theme, onDiet }) => onDiet && css`
        background-color: ${theme.COLORS.GREEN_DARK};
    `};

    ${({ theme, onDiet }) => !onDiet && css`
        background-color: ${theme.COLORS.RED_DARK};
    `};

    margin-right: 12px;
    margin-left: 15px;
`;

export const TagText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

