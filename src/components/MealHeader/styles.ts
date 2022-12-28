import styled from "styled-components/native";

export const Container = styled.View`
    margin-bottom: 10px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;