export default class Currency {
    private _code: string = "USD";
    private _symbol: string = "$";
    private _thousandsSeparator: string = ",";
    private _decimalSeparator: string = ".";
    private _symbolOnLeft: boolean = true;
    private _spaceBetweenAmountAndSymbol: boolean = false;
    private _roundingCoefficient: number = 0;
    private _decimalDigits: number = 2;

    constructor() {
    }

    public getDecimalDigits(): number {
        return this._decimalDigits;
    }

    public getRoundingCoefficient(): number {
        return this._roundingCoefficient;
    }

    public getSpaceBetweenAmountAndSymbol(): boolean {
        return this._spaceBetweenAmountAndSymbol;
    }

    public getSymbolOnLeft(): boolean {
        return this._symbolOnLeft;
    }

    public getDecimalSeparator(): string {
        return this._decimalSeparator;
    }

    public getThousandsSeparator(): string {
        return this._thousandsSeparator;
    }

    public getSymbol(): string {
        return this._symbol;
    }

    public getCode(): string {
        return this._code;
    }
}
