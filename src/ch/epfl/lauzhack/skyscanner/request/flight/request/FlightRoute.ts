const _BASE_URL: string = "http://partners.api.skyscanner.net/apiservices";
const _BROWSE_ROUTES: string = "/browseroutes";
const _V10_URL: string = "/v1.0";
const _API_KEY_URL: string = "apiKey=";

export default class FlightRoute {
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

    public getRequestUrl(apiKey: string): string {
        return _BASE_URL +
            _BROWSE_ROUTES +
            _V10_URL +
            "/" + this._country +
            "/" + this._currency +
            "/" + this._locale +
            "/" + this._originPlace +
            "/" + this._destinationPlace +
            "/" + this._outboundPartialDate +
            "/" + this._inboundPartialDate +
            "?" + _API_KEY_URL +
            apiKey;
    }
}
