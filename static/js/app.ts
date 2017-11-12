import SkyscannerRequest from "../../src/ch/epfl/lauzhack/skyscanner/request/SkyscannerRequest"; 
import User from "../../src/ch/epfl/lauzhack/skyscanner/game/objects/User";

    export class App{  
    private static req: SkyscannerRequest = new SkyscannerRequest();    
    public static run(): void{  
        console.log("Hello"); 
        App.updateMap();  
    }    
    private static updateMap(): void{  
        /*req.withDestPlace  
        req.withOriginPlace  
        req.withCurrCOuntr (chainable)    
        getFlightQuote.then((fr: FlightResponse) => { fr.toJourney() }).catch(error => {});   */
    }
}

App.run();