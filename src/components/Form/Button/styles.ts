import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    border-radius: 6px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const ButtonTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    color: ${({ theme }) => theme.COLORS.WHITE};
`;