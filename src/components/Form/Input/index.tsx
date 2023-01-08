import { forwardRef, Ref } from "react";
import { TextInput, TextInputProps } from "react-native";
import { InputLabel } from "../InputLabel";
import { Container, CustomTextInput } from "./styles";

interface InputProps extends TextInputProps {
    label: string;
}
const Input = forwardRef((props: InputProps, ref: Ref<TextInput>) => {

    const { label, ...rest } = props;

    return (
        <Container>
            <InputLabel label={label} />

            <CustomTextInput
                {...rest}
                ref={ref}
            />
        </Container>
    )
});

export { Input };