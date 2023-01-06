import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
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
    justify-content: space-between;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 25px;
`;

export const Info = styled.View`

`;

export const TitleContent = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const DetailContent = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    margin-bottom: 20px;
`;

export const DateTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const DateValue = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    margin-bottom: 20px;
`;

export const Buttons = styled.View`
    height: 110px;

    justify-content: space-between;
`;

export const ModalContainer = styled.View`
    flex: 1; 
    justify-content: center;
    align-items: center;
`;

export const Background = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: ${({ theme }) => theme.COLORS.GRAY_100}; 
    opacity: 0.5;
`;

export const ModalContent = styled.View`
    height: 170px;
    width: 80%;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 20px;
    border-radius: 8px;

    justify-content: space-between;
`;

export const ModalTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    text-align: center;
`;

export const ModalButtons = styled.View`
    flex-direction: row;
    justify-content: space-between;

    width: 100%;
`;

export const ModalButton = styled.View`
    width: 48%;
`;