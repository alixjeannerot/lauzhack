import Quote from "./types/Quote";
import Place from "./types/Place";
import Carrier from "./types/Carrier";
import Currency from "./types/Currency";
import Journey from "../../../game/objects/Journey";
const Cities = require("all-the-cities");
import City from "../all-the-cities";

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

    public toJourney():Array<Journey>{
        let journeys:Array<Journey>=new Array();
        for (let i=0;i<this._quotes.length;i++){
            let departID:number=this._quotes[i].getOutboundLeg().getOriginId();
            let departName:string= this.getNamewithId(departID);
            let departCountry =Cities.filter((city: Cities) => {return city.name.match(departName)}).country;
            let arrivalID=this._quotes[i].getOutboundLeg().getDestinationId();
            let arrival:string=this.getNamewithId(arrivalID);
            let departDate:number= this._quotes[i].getOutboundLeg().getDepartureDate();
            let arrivalDate:number=departID+14400000; /////////////Constant 4 hours travel in waiting for live result
            let cost:number= this._quotes[i].getMinPrice();

            journeys.push(new Journey(departName))
        }
    }

    public getNamewithId(id:number){
        return this._places.filter(x=>x.getPlaceId()===id)[0].getName();

    }

}
