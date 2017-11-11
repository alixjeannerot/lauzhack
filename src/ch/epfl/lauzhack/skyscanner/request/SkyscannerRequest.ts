import API from "../config/API";
import Country from "./flight/response/types/Country";
import FlightQuote from "./flight/quote/FlightQuote";
import FlightResponse from "./flight/response/FlightResponse";
import {Promise} from "es6-promise";

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

    public getFlightQuotes(): Promise<FlightResponse> {
        /*
        if (this._currentCountry.isUndefined() || this._currentCountry.length < 1) {
            throw new Error("currentCountry is illegal");
        }
        if (this._originPlace.isUndefined() || this._originPlace.length < 1) {
            throw new Error("originPlace is illegal");
        }
        if (this._destinationPlace.isUndefined() || this._destinationPlace.length < 1) {
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
                console.log("DATA:");
                return response.json();
            })
            .then(json => {
                console.log(json);
            })
            .catch((error) => {
                console.log("ERROR:");
                console.log(error);
            });
            */
        return new Promise(resolve => {});
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
