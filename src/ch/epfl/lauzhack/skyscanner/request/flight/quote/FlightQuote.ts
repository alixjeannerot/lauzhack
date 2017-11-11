export default class FlightQuote {
    private _headerAccept: string = "application/json";
    private _country: string;
    private _currency: string = "USD";
    private _locale: string = "en-GG";
    private _originPlace: string;
    private _destinationPlace: string;
    private _outboundPartialDate: string = "anytime";
    private _inboundPartialDate: string = "";

    constructor(country: string, originPlace: string, destinationPlace: string) {
        this._country = country;
        this._originPlace = originPlace;
        this._destinationPlace = destinationPlace;
    }

    public getInboundPartialDate(): string {
        return this._inboundPartialDate;
    }

    public getOutboundPartialDate(): string {
        return this._outboundPartialDate;
    }

    public getDestinationPlace(): string {
        return this._destinationPlace;
    }

    public getOriginPlace(): string {
        return this._originPlace;
    }

    public getLocale(): string {
        return this._locale;
    }

    public getCurrency(): string {
        return this._currency;
    }

    public getCountry(): string {
        return this._country;
    }

    public getHeaderAccept(): string {
        return this._headerAccept;
    }
}
