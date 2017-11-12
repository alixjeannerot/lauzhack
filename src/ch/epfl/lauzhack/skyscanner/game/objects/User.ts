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

    get getPosition() :string{
        if (this.inTransport){
            return "Somewhere between "+this.journey.getDepart+" and "+this.journey.getArrival;
        }
        else{
            return this.position;
        }
    }

    get getInTransport():boolean{
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
            if (this.position==destination.getDepart){
                this.setPosition(destination.getArrival,destination.getArrivalCountry);
                this.debit(destination.getCost);
            }
            else throw new Error("Illegal argument exception");
        }
        else throw new Error("User travelling");
    }

    private updateStatus():boolean {
        if (this.journey.getDepartTime>=Date.now() || this.journey.getArrivalTime<=Date.now()){
            return false;
        }
        else return true;
    }

    public static defaultUser(): User{
        return new User("", 0, "", "", Mission.defaultMission(), false, Journey.defaultJourney());
    }
}