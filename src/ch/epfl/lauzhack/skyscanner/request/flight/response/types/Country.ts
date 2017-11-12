export default class Country {
    private _code: string;
    private _name: string;

    constructor(code: string, name: string) {
        this._code = code;
        this._name = name;
    }

    public getName(): string {
        return this._name;
    }

    public getCode(): string {
        return this._code;
    }
}
