import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const BackContainer = styled.View`
    margin-left: 25px;
`;

export const Header = styled.View`
    width: 100%;
    margin-top: 50px;
    margin-bottom: 35px;
`;

export const PercentContainer = styled.View`
    justify-content: center;
    align-items: center;
`;

export const Percent = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_G}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const PercentText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 25px;
`;

export const ContentTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_XS}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 20px;
`;

export const StatisticCardContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const StatisticCardElement = styled.View`
    width: 48%;
`;