import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const BackContainer = styled.View` 
    position: absolute;
    left: 25px;
`;

export const TitleContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Header = styled.View`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 35px;
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 25px;
`;

export const Form = styled.View`
    flex: 1;

    width: 100%;
`;

export const FormControl = styled.View` 
    width: 100%; 
    margin-bottom: 20px;
`;

export const DateContainer = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
`;

export const InputElement = styled.View`
    width: 48%; 
`;

export const DietOptions = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin-top: 5px;
`;