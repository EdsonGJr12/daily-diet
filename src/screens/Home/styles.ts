import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    padding: 24px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 40px;
`;

interface StatisticsCardProps {
    aboveReference: boolean;
}
export const StatisticsCard = styled.TouchableOpacity<StatisticsCardProps>`
    height: 100px;
    padding: 10px;
    background-color: ${({ theme, aboveReference }) => aboveReference ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    margin-bottom: 40px;
`;

export const OpenContainer = styled.View`
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const StatisticContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;  
`;

export const StatisticPercent = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_G}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const StatisticText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const NewMeal = styled.View`
    margin-bottom: 40px;
`;

export const NewMealTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-bottom: 8px;
`;

export const NewMealButton = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 6px;

    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const NewMealButtonText = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_S}px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-left: 10px;
`;

export const ListEmpty = styled.View` 
    flex: 1;
    justify-content: center;
    align-items: center; 
`;

export const ListEmptyMessage = styled.Text`
    text-align: center;

    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;