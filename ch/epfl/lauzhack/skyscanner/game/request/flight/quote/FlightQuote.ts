export default class FlightQuote {
    private _headerAccept: string = "application/json";
    private _country: string;
    private _currency: string = "USD";
    private _locale: string = "en-GG";
    private _originPlace: string;
    private _destinationPlace: string;
    private _outboundPartialDate: string = "anytime";
    private _inboundPartialDate: string = "";

    constructor() {
    }
}
