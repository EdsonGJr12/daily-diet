import { Container, Detail, Total } from "./styles";

export interface StatisticCardTypeProps {
    type: "info" | "success" | "danger";
}
interface StatisticCardProps extends StatisticCardTypeProps {
    total: number;
    detail: string;
}
export function StatisticCard({ type, total, detail }: StatisticCardProps) {
    return (
        <Container type={type}>
            <Total>
                {total}
            </Total>

            <Detail>
                {detail}
            </Detail>
        </Container>
    )
}