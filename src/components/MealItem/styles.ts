import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    align-items: center;

    height: 50px;
    padding: 12px;

    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 6px;

    margin-bottom: 8px;
`;

export const HourContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Hour = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_XS}px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const NameContainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Divider = styled.View`
    height: 14px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    width: 1px;
    margin: 0px 12px;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_M}px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    width: 90%;
`;

interface DietProps {
    diet: boolean;
}
export const Diet = styled.Text<DietProps>`
    width: 14px;
    height: 14px;
    border-radius: 7px;

    background-color: ${({ theme, diet }) => diet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;