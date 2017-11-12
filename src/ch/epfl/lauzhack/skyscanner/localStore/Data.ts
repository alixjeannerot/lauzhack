import FileSystem = require('fs');
import User from "../game/objects/User";
import Mission from "../game/objects/Mission";

export default class Data{

    private users :Array<User>;
    private mission:Mission;

    constructor(users: Array<User>, mission :Mission) {
        this.users = users;
        this.mission=mission;
    }

    public writeUser(){
        for (let i=0;i<this.users.length;i++){
            FileSystem.writeFile("./Database/User"+i+".json",JSON.stringify(this.users[i]),err => console.log("Error while writing user"+err));
        }
    }

    public writeMission(){
            FileSystem.writeFile("./Database/Mission.json",JSON.stringify(this.mission),err => console.log("Error while writing mission"+err));
    }

    public readUser():Array<User> {
        let users:Array<User>=Array();
        let fileName:Array<string>;
        let content:string;
        FileSystem.readdir("./Database/",(err,files)=>{
            if(!err){
                console.log(files)
                fileName=files;
                for(let i=0;i<fileName.length;i++){
                    FileSystem.readFile("./Database/"+files[i]+".json",(err,data)=>{
                        if (!err){
                            console.log(data);
                            content=data.toString();
                            let json= JSON.parse(content);
                            users.push(new User(json.name, json.money, json.position, json.country, json.mission, json.inTransport,
                                json.journey));
                            console.log("NEW USER : " + users[i]);
                        }
                        else{
                            console.log("Error while reading file"+err);
                        }
                    })
                }
            }
            else {
                console.log("Error while reading directory"+err);
            }
        });
        return users;
    }

    public readMission():Mission{
        let mission:Mission=Mission.defaultMission();
        let content:string;
        FileSystem.readFile("./Database/Mission.json",(err,data)=>{
            if (!err){
                console.log(data);
                content=data.toString();
                let json= JSON.parse(content);
                mission=new Mission(json.depart,json.departCountry,json.arrival,json.arrivalCountry,json.budget,
                    json.deadLine,json.participant);
                console.log("Mission : " + mission);
            }
            else{
                console.log("Error while reading file mission"+err);
            }
        });
        return mission;
    }
}