import IOboundLeg from "./IOboundLeg";

export default class Quote {
    private _quoteId: number;
    private _minPrice: number;
    private _direct: boolean;
    private _outboundLeg: IOboundLeg;
    private _inboundLeg: IOboundLeg;
    private _quoteDateTime: number;

    constructor(quoteId: number, minPrice: number, direct: boolean, outboundLeg: IOboundLeg, inboundLeg: IOboundLeg,
                quoteDateTime: string) {
        this._quoteId = quoteId;
        this._minPrice = minPrice;
        this._direct = direct;
        this._outboundLeg = outboundLeg;
        this._inboundLeg = inboundLeg;
        this._quoteDateTime = Date.parse(quoteDateTime);
    }

    public getQuoteDateTime(): number {
        return this._quoteDateTime;
    }

    public getInboundLeg(): IOboundLeg {
        return this._inboundLeg;
    }

    public getOutboundLeg(): IOboundLeg {
        return this._outboundLeg;
    }

    public getDirect(): boolean {
        return this._direct;
    }

    public getMinPrice(): number {
        return this._minPrice;
    }

    public getQuoteId(): number {
        return this._quoteId;
    }

    public static toQuote(quote: any): Quote {
        let inBoundLeg: IOboundLeg = IOboundLeg.getDefault();
        let outBoundLeg: IOboundLeg = IOboundLeg.getDefault();

        if (!(quote.InboundLeg == null)) {
            inBoundLeg = new IOboundLeg(quote.InboundLeg.CarrierIds,
                quote.InboundLeg.OriginId,
                quote.InboundLeg.DestinationId,
                quote.InboundLeg.DepartureDate);
        }
        if (!(quote.OutboundLeg == null)) {
            outBoundLeg = new IOboundLeg(quote.OutboundLeg.CarrierIds,
                quote.OutboundLeg.OriginId,
                quote.OutboundLeg.DestinationId,
                quote.OutboundLeg.DepartureDate);
        }

        return new Quote(quote.QuoteId, quote.MinPrice, quote.Direct, outBoundLeg, inBoundLeg, quote.QuoteDateTime);
    }
}
