import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
`;

export const Label = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`;