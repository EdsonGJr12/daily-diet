import styled from "styled-components/native";

export const Container = styled.View`
    width: 100%;
`;

export const TextInput = styled.TextInput` 
    height: 48px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 8px;
    padding: 10px;
    margin-top: 5px;
`;