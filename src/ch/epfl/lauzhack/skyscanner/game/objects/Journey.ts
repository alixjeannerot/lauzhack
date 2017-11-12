import TypeTransport from "./TypeTransport";
const Cities = require("all-the-cities");


export default class Journey {
    private depart :string;
    private arrival :string;
    private departCountry:string;
    private arrivalCountry:string;
    private departTime : number;
    private arrivalTime: number;
    private cost: number;
    private type:TypeTransport;

    constructor(depart: string, arrival: string, departCountry: string, arrivalCountry: string, departTime: number,
                arrivalTime : number, cost :number, type:TypeTransport) {
        this.depart = depart;
        this.arrival = arrival;
        this.departCountry = departCountry;
        this.arrivalCountry = arrivalCountry;
        this.departTime = departTime;
        this.arrivalTime=arrivalTime;
        this.cost=cost;
        this.type=type;
    }

    public getDepart(){
        return this.depart;
    }
    public getArrival(){
        return this.arrival;
    }
    public getDepartTime(){
        return this.departTime;
    }
    public getArrivalTime(){
        return this.arrivalTime;
    }
    public getDepartCountry(){
        return this.departCountry;
    }
    public getArrivalCountry(){
        return this.arrivalCountry;
    }
    public getCost(){
        return this.cost;
    }

    public static defaultJourney(): Journey{
        return new Journey("", "", "", "", 0, 0, 0, TypeTransport.PLANE);
    }

    public getLatForArrival():number{
        return Cities.filter(city=>city===this.arrival)[0].lat;
    }

    public getLongForArrival():number{
        return Cities.filter(city=>city===this.arrival)[0].long;
    }

}