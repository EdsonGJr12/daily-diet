import { Container, Label } from "./styles";

interface InputLabelProps {
    label: string;
}
export function InputLabel({ label }: InputLabelProps) {
    return (
        <Container>
            <Label>
                {label}
            </Label>
        </Container>
    )
}