import Mission from "./Mission";
import Journey from "./Journey";

export default class User{
    private name : string;
    private money : number;
    private position:string;
    private country: string;
    private mission: Mission;
    private inTransport : boolean;
    private journey : Journey;

    constructor(name:string,  money:number, position:string,country:string, mission:Mission, inTransport:boolean,
                journey : Journey){
        this.name=name;
        this.money=money;
        this.position=position;
        this.country=country;
        this.mission=mission;
        this.inTransport=inTransport;
        this.journey = journey;
    }

    public getPosition(){
        return this.position;
    }

    public getInTransport(){
        this.inTransport=this.updateStatus();
        return this.inTransport;
    }

    public setMission(value: Mission):void {
        this.mission = value;
        this.setMoney(value.budget);
        this.setPosition(value.depart, value.departCountry);
    }

    private setPosition(position :string, country:string) : void{
        this.position=position;
        this.country=country;
    }

    private setMoney(budget: number) :void {
        this.money=budget;
    }

    public debit (toDebit:number):void{
        if(toDebit>0 && this.money>= toDebit){
            return this.setMoney(this.money-toDebit);
        }
    }

    public travelTo (destination :Journey):void{
        this.inTransport= this.updateStatus();
        if (!this.getInTransport){
            if (this.position==destination.getDepart()){
                this.setPosition(destination.getArrival(),destination.getArrivalCountry());
            }
            else throw new Error("Illegal argument exception");
            return this.debit(destination.getCost());
        }
        else throw new Error("User travelling");
    }

    public updateStatus(){
        return !(this.journey.getDepartTime()>=Date.now() || this.journey.getArrivalTime()<=Date.now());
    }

    public static defaultUser(): User{
        return new User("", 0, "", "", Mission.defaultMission(), false, Journey.defaultJourney());
    }
}