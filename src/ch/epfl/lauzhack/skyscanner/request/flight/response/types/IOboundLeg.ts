export default class IOboundLeg {
    private _carrierIds: Array<number>;
    private _originId: number;
    private _destinationId: number;
    private _departureDate: number;

    constructor(carrierIds: Array<number>, originId: number, destinationId: number, departureDate: string) {
        this._carrierIds = carrierIds;
        this._originId = originId;
        this._destinationId = destinationId;
        this._departureDate = Date.parse(departureDate);
    }

    public getDepartureDate(): number {
        return this._departureDate;
    }

    public getDestinationId(): number {
        return this._destinationId;
    }

    public getOriginId(): number {
        return this._originId;
    }

    public getCarrierIds(): Array<number> {
        return this._carrierIds;
    }

    public static getDefault(): IOboundLeg {
        return new IOboundLeg(Array(), -1, -1, "0000-00-00T00:00:00");
    }
}
