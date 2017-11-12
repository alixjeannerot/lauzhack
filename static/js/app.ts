import SkyscannerRequest from "../../src/ch/epfl/lauzhack/skyscanner/request/SkyscannerRequest"; 
import User from "../../src/ch/epfl/lauzhack/skyscanner/game/objects/User";

    export default class App{  
    private toDisplay : Array<Jouney>;
    private static req: SkyscannerRequest = new SkyscannerRequest();    
    public static run(user: User): void{  
        console.log(user); 
        App.updateMap();  
        toDisplay=Array();
    }    

    private static updateMap(): void{  
       /* req.withDestPlace  
        req.withOriginPlace  
        req.withCurrCOuntr (chainable)    
        getFlightQuote.then((fr: FlightResponse) => { fr.toJourney() }).catch(error => {}).to;   */
    }
}