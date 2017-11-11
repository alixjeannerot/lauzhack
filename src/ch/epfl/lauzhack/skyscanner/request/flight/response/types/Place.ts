export default class Place {
    private _placeId: number;
    private _name: string;
    private _type: string;
    private _skyscannerCode: string;

    constructor(placeId: number, name: string, type: string, skyscannerCode: string) {
        this._placeId = placeId;
        this._name = name;
        this._type = type;
        this._skyscannerCode = skyscannerCode;
    }

    public getSkyscannerCode(): string {
        return this._skyscannerCode;
    }

    public getType(): string {
        return this._type;
    }

    public getName(): string {
        return this._name;
    }

    public getPlaceId(): number {
        return this._placeId;
    }
}
