import User from "./User";

export default class Mission{
    depart :string;
    departCountry:string;
    arrival:string;
    countryArrival:string
    budget:number;
    deadLine:Date;
    participant:Array<User>;

    constructor(depart:string,departCountry:string,arrival:string,countryArrival:string, budget:number, deadLine:Date,
                participant:Array<User>){
        this.depart=depart;
        this.departCountry=departCountry;
        this.arrival=arrival;
        this.countryArrival=countryArrival;
        this.budget=budget;
        this.deadLine=deadLine;
        this.participant=participant; //Check if it is well copied
    }

    public assignMission(user :User){
        this.participant.push(user);
        user.setMission  ///////check this
    }
}