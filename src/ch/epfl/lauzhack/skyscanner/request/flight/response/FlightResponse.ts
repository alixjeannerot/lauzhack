import Quote from "./types/Quote";
import Place from "./types/Place";
import Carrier from "./types/Carrier";
import Currency from "./types/Currency";

export default class FlightResponse {
    private _quotes: Array<Quote>;
    private _places: Array<Place>;
    private _carriers: Array<Carrier>;
    private _currencies: Array<Currency>;

    constructor(quotes: Array<Quote>, places: Array<Place>, carriers: Array<Carrier>, currencies: Array<Currency>) {
        this._quotes = quotes;
        this._places = places;
        this._carriers = carriers;
        this._currencies = currencies;
    }

    public getCurrencies(): Array<Currency> {
        return this._currencies;
    }

    public getCarriers(): Array<Carrier> {
        return this._carriers;
    }

    public getPlaces(): Array<Place> {
        return this._places;
    }

    public getQuotes(): Array<Quote> {
        return this._quotes;
    }
}
