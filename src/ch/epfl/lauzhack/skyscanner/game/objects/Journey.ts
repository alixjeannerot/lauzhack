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

    get getDepart(){
        return this.depart;
    }
    get getArrival(){
        return this.arrival;
    }
    get getDepartTime(){
        return this.departTime;
    }
    get getArrivalTime(){
        return this.arrivalTime;
    }
    get getDepartCountry(){
        return this.departCountry;
    }
    get getArrivalCountry(){
        return this.arrivalCountry;
    }
    get getCost(){
        return this.cost;
    }

    public static defaultJourney(): Journey{
        return new Journey("", "", "", "", 0, 0, 0, TypeTransport.PLANE);
    }
}