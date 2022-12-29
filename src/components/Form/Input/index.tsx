import { TextInputProps } from "react-native";
import { InputLabel } from "../InputLabel";
import { Container, TextInput } from "./styles";

interface InputProps extends TextInputProps {
    label: string;
}
export function Input({ label, ...rest }: InputProps) {
    return (
        <Container>
            <InputLabel label={label} />

            <TextInput
                {...rest}
            />
        </Container>
    )
}