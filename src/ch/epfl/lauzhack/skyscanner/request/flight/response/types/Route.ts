export default class Route {
    private _originId: number;
    private _destinationId: number;
    private _quoteIds: Array<number>;
    private _price: number;
    private _quoteDateTime: number;

    constructor(originId: number, destinationId: number, quoteIds: Array<number>, price: number,
                quoteDateTime: string) {
        this._originId = originId;
        this._destinationId = destinationId;
        this._quoteIds = quoteIds;
        this._price = price;
        this._quoteDateTime = Date.parse(quoteDateTime);
    }

    public getQuoteDateTime(): number {
        return this._quoteDateTime;
    }

    public getPrice(): number {
        return this._price;
    }

    public getQuoteIds(): Array<number> {
        return this._quoteIds;
    }

    public getDestinationId(): number {
        return this._destinationId;
    }

    public getOriginId(): number {
        return this._originId;
    }

    public static toRoute(route: any): Route {
        return new Route(route.OriginId, route.DestinationId, route.QuoteIds, route.Price, route.QuoteDateTime);
    }
}
