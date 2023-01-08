import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};;

    padding: 22px;
`;

interface TitleProps {
    onDiet: boolean;
}
export const Title = styled.Text<TitleProps>`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_M}px;
    color: ${({ theme, onDiet }) => onDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};

    margin-bottom: 10px;
`;

export const Detail = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    text-align: center;
    margin-bottom: 30px;
`;

export const DetailBold = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-bottom: 10px;
`;

export const ButtonContainer = styled.View`
    width: 60%;
    margin-top: 30px;
`;