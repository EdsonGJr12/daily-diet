import styled from "styled-components/native";
import { TextInput } from "react-native";

export const Container = styled.View`
    width: 100%;
`;

export const CustomTextInput = styled(TextInput)`  
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 8px;
    padding: 10px;
    margin-top: 5px;
`;