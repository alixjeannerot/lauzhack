import API from "../config/API";
import Country from "./flight/response/types/Country";
import FlightQuote from "./flight/quote/FlightQuote";
import Quote from "./flight/response/types/Quote";
import Place from "./flight/response/types/Place";
import Carrier from "./flight/response/types/Carrier";
import Currency from "./flight/response/types/Currency";
import FlightResponse from "./flight/response/FlightResponse";

require('es6-promise').polyfill();
require('isomorphic-fetch');

const _BASE_URL: string = "http://partners.api.skyscanner.net/apiservices";
const _REFERENCE_URL: string = "/reference";
const _V10_URL: string = "/v1.0";
const _COUNTRIES_URL: string = "/countries";
const _API_KEY_URL: string = "apiKey=";

const _API_KEY: string = (new API()).getKey();
const _LOCALE: string = "en-GG";

export default class SkyscannerRequest {
    private _currentCountry: string;
    private _originPlace: string;
    private _destinationPlace: string;

    constructor() {
    }

    public withDestinationPlace(destinationPlace: string): SkyscannerRequest {
        this._destinationPlace = destinationPlace;

        return this;
    }

    public withOriginPlace(originPlace: string): SkyscannerRequest {
        this._originPlace = originPlace;

        return this;
    }

    public withCurrentCountry(value: string): SkyscannerRequest {
        this._currentCountry = value;

        return this;
    }

    public getFlightQuotes(): Promise<void | FlightResponse> {
        if (this._currentCountry == null || this._currentCountry.length < 1) {
            throw new Error("currentCountry is illegal");
        }
        if (this._originPlace == null || this._originPlace.length < 1) {
            throw new Error("originPlace is illegal");
        }
        if (this._destinationPlace == null || this._destinationPlace.length < 1) {
            throw new Error("destinationPlace is illegal");
        }

        const flightQuote: FlightQuote =
            new FlightQuote(this._currentCountry,
                this._originPlace,
                this._destinationPlace);

        return fetch(flightQuote.getRequestUrl(_API_KEY), {
            method: "GET"
        })
            .then((response: Response) => {
                return response.json();
            })
            .then(json => {
                return {
                    quotes: json.Quotes,
                    places: json.Places,
                    carriers: json.Carriers,
                    currencies: json.Currencies
                };
            })
            .then(arrays => {
                return {
                    quotes: arrays.quotes.map((quote: any) => {
                        return Quote.toQuote(quote);
                    }),
                    places: arrays.places.map((place: any) => {
                        return Place.toPlace(place);
                    }),
                    carriers: arrays.carriers.map((carrier: any) => {
                        return Carrier.toCarrier(carrier);
                    }),
                    currencies: arrays.currencies.map((currency: any) => {
                        return Currency.toCurrency(currency);
                    })
                }
            })
            .then(arrays => {
                return new FlightResponse(arrays.quotes, arrays.places, arrays.carriers, arrays.currencies);
            })
            .catch((error) => {
                console.log("ERROR:");
                console.log(error);
            });
    }

    public static getCountries(): Promise<Country> {
        return fetch(SkyscannerRequest.getCountriesUrl(), {
            method: "GET"
        })
            .then((response: Response) => {
                return response.json();
            })
            .then(json => {
                return json.Countries.map((country: any) => {
                    return new Country(country.Code, country.Name);
                });
            })
            .then((countries) => {
                return countries;
            })
            .catch((error) => {
                console.log("ERROR:");
                console.log(error);
            });
    }

    public static getCountriesUrl(): string {
        return _BASE_URL +
            _REFERENCE_URL +
            _V10_URL +
            _COUNTRIES_URL +
            "/" + _LOCALE +
            "?" + _API_KEY_URL +
            _API_KEY;
    }
}
