import User from "./User";

export default class Mission{
    depart :string;
    departCountry:string;
    arrival:string;
    countryArrival:string
    budget:number;
    deadLine:number;
    participant:Array<User>;
    winner: User;
    end:Boolean;

    constructor(depart:string,departCountry:string,arrival:string,countryArrival:string, budget:number, deadLine:number,
                participant:Array<User>){
        this.depart=depart;
        this.departCountry=departCountry;
        this.arrival=arrival;
        this.countryArrival=countryArrival;
        this.budget=budget;
        this.deadLine=deadLine;
        this.participant=participant; //Check if it is well copied
        this.end=false;
    }

    public assignMission(user :User){
        this.participant.push(user);
        user.setMission(this);  ///////check this
    }

    public isMissionComplete(){
        if (Date.now()<this.deadLine){
            for (let i=0;i<this.participant.length;i++){
                if (this.participant[i].getPosition()==this.arrival){
                    this.winner=this.participant[i];
                    return true;
                }
            }
            return false;
        }
        else return true;
    }

    public static defaultMission(): Mission{
        return new Mission("", "", "", "", 0, Date.now(), Array());
    }
}