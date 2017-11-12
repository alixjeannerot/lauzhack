import TypeTransport from "./TypeTransport";


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

    get getDepart():string{
        return this.depart;
    }
    get getArrival():string{
        return this.arrival;
    }
    get getDepartTime():number{
        return this.departTime;
    }
    get getArrivalTime():number{
        return this.arrivalTime;
    }
    get getDepartCountry():string{
        return this.departCountry;
    }
    get getArrivalCountry():string{
        return this.arrivalCountry;
    }
    get getCost():number {
        return this.cost;
    }

    public static defaultJourney(): Journey{
        return new Journey("", "", "", "", 0, 0, 0, TypeTransport.PLANE);
    }
}