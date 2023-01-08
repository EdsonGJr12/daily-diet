export function maskPercent(value: number) {
    return Intl.NumberFormat("pt-BR", {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value / 100);
}