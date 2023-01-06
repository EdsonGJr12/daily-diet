import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export function maskPercent(value: number) {
    return Intl.NumberFormat("pt-BR", {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value / 100);
}