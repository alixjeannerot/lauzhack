export default class Carrier {
    private _carrierId: string;
    private _name: string;

    constructor(carrierId: string, name: string) {
        this._carrierId = carrierId;
        this._name = name;
    }

    public getName(): string {
        return this._name;
    }

    public getCarrierId(): string {
        return this._carrierId;
    }
}
