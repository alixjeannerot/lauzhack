System.register("src/ch/epfl/lauzhack/skyscanner/config/API", ["fs"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FileSystem, API;
    return {
        setters: [
            function (FileSystem_1) {
                FileSystem = FileSystem_1;
            }
        ],
        execute: function () {
            API = /** @class */ (function () {
                function API() {
                    this._key = FileSystem.readFileSync("api.key").toString();
                }
                API.prototype.getKey = function () {
                    return this._key;
                };
                return API;
            }());
            exports_1("default", API);
        }
    };
});
System.register("src/ch/epfl/lauzhack/skyscanner/request/flight/response/types/Country", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Country;
    return {
        setters: [],
        execute: function () {
            Country = /** @class */ (function () {
                function Country(code, name) {
                    this._code = code;
                    this._name = name;
                }
                Country.prototype.getName = function () {
                    return this._name;
                };
                Country.prototype.getCode = function () {
                    return this._code;
                };
                return Country;
            }());
            exports_2("default", Country);
        }
    };
});
System.register("src/ch/epfl/lauzhack/skyscanner/request/flight/quote/FlightQuote", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var _BASE_URL, _BROWSE_QUOTES, _V10_URL, _API_KEY_URL, FlightQuote;
    return {
        setters: [],
        execute: function () {
            _BASE_URL = "http://partners.api.skyscanner.net/apiservices";
            _BROWSE_QUOTES = "/browsequotes";
            _V10_URL = "/v1.0";
            _API_KEY_URL = "apiKey=";
            FlightQuote = /** @class */ (function () {
                function FlightQuote(country, originPlace, destinationPlace) {
                    this._headerAccept = "application/json";
                    this._currency = "USD";
                    this._locale = "en-GG";
                    this._outboundPartialDate = "anytime";
                    this._inboundPartialDate = "";
                    this._country = country;
                    this._originPlace = originPlace;
                    this._destinationPlace = destinationPlace;
                }
                FlightQuote.prototype.getInboundPartialDate = function () {
                    return this._inboundPartialDate;
                };
                FlightQuote.prototype.getOutboundPartialDate = function () {
                    return this._outboundPartialDate;
                };
                FlightQuote.prototype.getDestinationPlace = function () {
                    return this._destinationPlace;
                };
                FlightQuote.prototype.getOriginPlace = function () {
                    return this._originPlace;
                };
                FlightQuote.prototype.getLocale = function () {
                    return this._locale;
                };
                FlightQuote.prototype.getCurrency = function () {
                    return this._currency;
                };
                FlightQuote.prototype.getCountry = function () {
                    return this._country;
                };
                FlightQuote.prototype.getHeaderAccept = function () {
                    return this._headerAccept;
                };
                FlightQuote.prototype.getRequestUrl = function (apiKey) {
                    return _BASE_URL +
                        _BROWSE_QUOTES +
                        _V10_URL +
                        "/" + this._country +
                        "/" + this._currency +
                        "/" + this._locale +
                        "/" + this._originPlace +
                        "/" + this._destinationPlace +
                        "/" + this._outboundPartialDate +
                        "/" + this._inboundPartialDate +
                        "?" + _API_KEY_URL +
                        apiKey;
                };
                return FlightQuote;
            }());
            exports_3("default", FlightQuote);
        }
    };
});
System.register("src/ch/epfl/lauzhack/skyscanner/request/flight/response/types/IOboundLeg", [], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var IOboundLeg;
    return {
        setters: [],
        execute: function () {
            IOboundLeg = /** @class */ (function () {
                function IOboundLeg(carrierIds, originId, destinationId, departureDate) {
                    this._carrierIds = carrierIds;
                    this._originId = originId;
                    this._destinationId = destinationId;
                    this._departureDate = Date.parse(departureDate);
                }
                IOboundLeg.prototype.getDepartureDate = function () {
                    return this._departureDate;
                };
                IOboundLeg.prototype.getDestinationId = function () {
                    return this._destinationId;
                };
                IOboundLeg.prototype.getOriginId = function () {
                    return this._originId;
                };
                IOboundLeg.prototype.getCarrierIds = function () {
                    return this._carrierIds;
                };
                IOboundLeg.getDefault = function () {
                    return new IOboundLeg(Array(), -1, -1, "0000-00-00T00:00:00");
                };
                return IOboundLeg;
            }());
            exports_4("default", IOboundLeg);
        }
    };
});
System.register("src/ch/epfl/lauzhack/skyscanner/request/flight/response/types/Quote", ["src/ch/epfl/lauzhack/skyscanner/request/flight/response/types/IOboundLeg"], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var IOboundLeg_1, Quote;
    return {
        setters: [
            function (IOboundLeg_1_1) {
                IOboundLeg_1 = IOboundLeg_1_1;
            }
        ],
        execute: function () {
            Quote = /** @class */ (function () {
                function Quote(quoteId, minPrice, direct, outboundLeg, inboundLeg, quoteDateTime) {
                    this._quoteId = quoteId;
                    this._minPrice = minPrice;
                    this._direct = direct;
                    this._outboundLeg = outboundLeg;
                    this._inboundLeg = inboundLeg;
                    this._quoteDateTime = Date.parse(quoteDateTime);
                }
                Quote.prototype.getQuoteDateTime = function () {
                    return this._quoteDateTime;
                };
                Quote.prototype.getInboundLeg = function () {
                    return this._inboundLeg;
                };
                Quote.prototype.getOutboundLeg = function () {
                    return this._outboundLeg;
                };
                Quote.prototype.getDirect = function () {
                    return this._direct;
                };
                Quote.prototype.getMinPrice = function () {
                    return this._minPrice;
                };
                Quote.prototype.getQuoteId = function () {
                    return this._quoteId;
                };
                Quote.toQuote = function (quote) {
                    var inBoundLeg = IOboundLeg_1["default"].getDefault();
                    var outBoundLeg = IOboundLeg_1["default"].getDefault();
                    if (!(quote.InboundLeg == null)) {
                        inBoundLeg = new IOboundLeg_1["default"](quote.InboundLeg.CarrierIds, quote.InboundLeg.OriginId, quote.InboundLeg.DestinationId, quote.InboundLeg.DepartureDate);
                    }
                    if (!(quote.OutboundLeg == null)) {
                        outBoundLeg = new IOboundLeg_1["default"](quote.OutboundLeg.CarrierIds, quote.OutboundLeg.OriginId, quote.OutboundLeg.DestinationId, quote.OutboundLeg.DepartureDate);
                    }
                    return new Quote(quote.QuoteId, quote.MinPrice, quote.Direct, outBoundLeg, inBoundLeg, quote.QuoteDateTime);
                };
                return Quote;
            }());
            exports_5("default", Quote);
        }
    };
});
System.register("src/ch/epfl/lauzhack/skyscanner/request/flight/response/types/Place", [], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var Place;
    return {
        setters: [],
        execute: function () {
            Place = /** @class */ (function () {
                function Place(placeId, name, type, skyscannerCode) {
                    this._placeId = placeId;
                    this._name = name;
                    this._type = type;
                    this._skyscannerCode = skyscannerCode;
                }
                Place.prototype.getSkyscannerCode = function () {
                    return this._skyscannerCode;
                };
                Place.prototype.getType = function () {
                    return this._type;
                };
                Place.prototype.getName = function () {
                    return this._name;
                };
                Place.prototype.getPlaceId = function () {
                    return this._placeId;
                };
                Place.toPlace = function (place) {
                    return new Place(place.PlaceId, place.Name, place.Type, place.SkyscannerCode);
                };
                return Place;
            }());
            exports_6("default", Place);
        }
    };
});
System.register("src/ch/epfl/lauzhack/skyscanner/request/flight/response/types/Carrier", [], function (exports_7, context_7) {
    "use strict";
    var __moduleName = context_7 && context_7.id;
    var Carrier;
    return {
        setters: [],
        execute: function () {
            Carrier = /** @class */ (function () {
                function Carrier(carrierId, name) {
                    this._carrierId = carrierId;
                    this._name = name;
                }
                Carrier.prototype.getName = function () {
                    return this._name;
                };
                Carrier.prototype.getCarrierId = function () {
                    return this._carrierId;
                };
                Carrier.toCarrier = function (carrier) {
                    return new Carrier(carrier.CarrierId, carrier.Name);
                };
                return Carrier;
            }());
            exports_7("default", Carrier);
        }
    };
});
System.register("src/ch/epfl/lauzhack/skyscanner/request/flight/response/types/Currency", [], function (exports_8, context_8) {
    "use strict";
    var __moduleName = context_8 && context_8.id;
    var Currency;
    return {
        setters: [],
        execute: function () {
            Currency = /** @class */ (function () {
                function Currency() {
                    this._code = "USD";
                    this._symbol = "$";
                    this._thousandsSeparator = ",";
                    this._decimalSeparator = ".";
                    this._symbolOnLeft = true;
                    this._spaceBetweenAmountAndSymbol = false;
                    this._roundingCoefficient = 0;
                    this._decimalDigits = 2;
                }
                Currency.prototype.getDecimalDigits = function () {
                    return this._decimalDigits;
                };
                Currency.prototype.getRoundingCoefficient = function () {
                    return this._roundingCoefficient;
                };
                Currency.prototype.getSpaceBetweenAmountAndSymbol = function () {
                    return this._spaceBetweenAmountAndSymbol;
                };
                Currency.prototype.getSymbolOnLeft = function () {
                    return this._symbolOnLeft;
                };
                Currency.prototype.getDecimalSeparator = function () {
                    return this._decimalSeparator;
                };
                Currency.prototype.getThousandsSeparator = function () {
                    return this._thousandsSeparator;
                };
                Currency.prototype.getSymbol = function () {
                    return this._symbol;
                };
                Currency.prototype.getCode = function () {
                    return this._code;
                };
                Currency.toCurrency = function (currency) {
                    return new Currency();
                };
                return Currency;
            }());
            exports_8("default", Currency);
        }
    };
});
System.register("src/ch/epfl/lauzhack/skyscanner/game/objects/TypeTransport", [], function (exports_9, context_9) {
    "use strict";
    var __moduleName = context_9 && context_9.id;
    var TypeTransport;
    return {
        setters: [],
        execute: function () {
            (function (TypeTransport) {
                TypeTransport[TypeTransport["PLANE"] = 0] = "PLANE";
                TypeTransport[TypeTransport["CAR"] = 1] = "CAR";
            })(TypeTransport || (TypeTransport = {}));
            exports_9("default", TypeTransport);
        }
    };
});
System.register("src/ch/epfl/lauzhack/skyscanner/game/objects/Journey", ["src/ch/epfl/lauzhack/skyscanner/game/objects/TypeTransport"], function (exports_10, context_10) {
    "use strict";
    var __moduleName = context_10 && context_10.id;
    var TypeTransport_1, Journey;
    return {
        setters: [
            function (TypeTransport_1_1) {
                TypeTransport_1 = TypeTransport_1_1;
            }
        ],
        execute: function () {
            Journey = /** @class */ (function () {
                function Journey(depart, arrival, departCountry, arrivalCountry, departTime, arrivalTime, cost, type) {
                    this.depart = depart;
                    this.arrival = arrival;
                    this.departCountry = departCountry;
                    this.arrivalCountry = arrivalCountry;
                    this.departTime = departTime;
                    this.arrivalTime = arrivalTime;
                    this.cost = cost;
                    this.type = type;
                }
                Journey.prototype.getDepart = function () {
                    return this.depart;
                };
                Journey.prototype.getArrival = function () {
                    return this.arrival;
                };
                Journey.prototype.getDepartTime = function () {
                    return this.departTime;
                };
                Journey.prototype.getArrivalTime = function () {
                    return this.arrivalTime;
                };
                Journey.prototype.getDepartCountry = function () {
                    return this.departCountry;
                };
                Journey.prototype.getArrivalCountry = function () {
                    return this.arrivalCountry;
                };
                Journey.prototype.getCost = function () {
                    return this.cost;
                };
                Journey.defaultJourney = function () {
                    return new Journey("", "", "", "", 0, 0, 0, TypeTransport_1["default"].PLANE);
                };
                return Journey;
            }());
            exports_10("default", Journey);
        }
    };
});
System.register("src/ch/epfl/lauzhack/skyscanner/request/flight/response/FlightResponse", ["src/ch/epfl/lauzhack/skyscanner/game/objects/Journey", "src/ch/epfl/lauzhack/skyscanner/game/objects/TypeTransport"], function (exports_11, context_11) {
    "use strict";
    var __moduleName = context_11 && context_11.id;
    var Journey_1, TypeTransport_2, Cities, FlightResponse;
    return {
        setters: [
            function (Journey_1_1) {
                Journey_1 = Journey_1_1;
            },
            function (TypeTransport_2_1) {
                TypeTransport_2 = TypeTransport_2_1;
            }
        ],
        execute: function () {
            Cities = require("all-the-cities");
            FlightResponse = /** @class */ (function () {
                function FlightResponse(quotes, places, carriers, currencies) {
                    this._quotes = quotes;
                    this._places = places;
                    this._carriers = carriers;
                    this._currencies = currencies;
                }
                FlightResponse.prototype.getCurrencies = function () {
                    return this._currencies;
                };
                FlightResponse.prototype.getCarriers = function () {
                    return this._carriers;
                };
                FlightResponse.prototype.getPlaces = function () {
                    return this._places;
                };
                FlightResponse.prototype.getQuotes = function () {
                    return this._quotes;
                };
                FlightResponse.prototype.toJourney = function () {
                    var journeys = new Array();
                    var _loop_1 = function (i) {
                        var departID = this_1._quotes[i].getOutboundLeg().getOriginId();
                        var departName = this_1.getNameWithId(departID);
                        console.log(Cities.constructor.prototype);
                        var departCountry = Cities.filter(function (city) { return city.name === departName; }).country;
                        var arrivalID = this_1._quotes[i].getOutboundLeg().getDestinationId();
                        var arrivalName = this_1.getNameWithId(arrivalID);
                        var arrivalCountry = Cities.filter(function (city) { return city.name === departName; }).country;
                        var departDate = this_1._quotes[i].getOutboundLeg().getDepartureDate();
                        var arrivalDate = departID + 14400000; /////////////Constant 4 hours travel in waiting for live result
                        var cost = this_1._quotes[i].getMinPrice();
                        journeys.push(new Journey_1["default"](departName, arrivalName, departCountry, arrivalCountry, departDate, arrivalDate, cost, TypeTransport_2["default"].PLANE));
                    };
                    var this_1 = this;
                    for (var i = 0; i < this._quotes.length; i++) {
                        _loop_1(i);
                    }
                    return journeys;
                };
                FlightResponse.prototype.getNameWithId = function (id) {
                    return this._places.filter(function (x) { return x.getPlaceId() === id; })[0].getName();
                };
                return FlightResponse;
            }());
            exports_11("default", FlightResponse);
        }
    };
});
System.register("src/ch/epfl/lauzhack/skyscanner/request/SkyscannerRequest", ["src/ch/epfl/lauzhack/skyscanner/config/API", "src/ch/epfl/lauzhack/skyscanner/request/flight/response/types/Country", "src/ch/epfl/lauzhack/skyscanner/request/flight/quote/FlightQuote", "src/ch/epfl/lauzhack/skyscanner/request/flight/response/types/Quote", "src/ch/epfl/lauzhack/skyscanner/request/flight/response/types/Place", "src/ch/epfl/lauzhack/skyscanner/request/flight/response/types/Carrier", "src/ch/epfl/lauzhack/skyscanner/request/flight/response/types/Currency", "src/ch/epfl/lauzhack/skyscanner/request/flight/response/FlightResponse"], function (exports_12, context_12) {
    "use strict";
    var __moduleName = context_12 && context_12.id;
    var API_1, Country_1, FlightQuote_1, Quote_1, Place_1, Carrier_1, Currency_1, FlightResponse_1, _BASE_URL, _REFERENCE_URL, _V10_URL, _COUNTRIES_URL, _API_KEY_URL, _API_KEY, _LOCALE, SkyscannerRequest;
    return {
        setters: [
            function (API_1_1) {
                API_1 = API_1_1;
            },
            function (Country_1_1) {
                Country_1 = Country_1_1;
            },
            function (FlightQuote_1_1) {
                FlightQuote_1 = FlightQuote_1_1;
            },
            function (Quote_1_1) {
                Quote_1 = Quote_1_1;
            },
            function (Place_1_1) {
                Place_1 = Place_1_1;
            },
            function (Carrier_1_1) {
                Carrier_1 = Carrier_1_1;
            },
            function (Currency_1_1) {
                Currency_1 = Currency_1_1;
            },
            function (FlightResponse_1_1) {
                FlightResponse_1 = FlightResponse_1_1;
            }
        ],
        execute: function () {
            require('es6-promise').polyfill();
            require('isomorphic-fetch');
            _BASE_URL = "http://partners.api.skyscanner.net/apiservices";
            _REFERENCE_URL = "/reference";
            _V10_URL = "/v1.0";
            _COUNTRIES_URL = "/countries";
            _API_KEY_URL = "apiKey=";
            _API_KEY = (new API_1["default"]()).getKey();
            _LOCALE = "en-GG";
            SkyscannerRequest = /** @class */ (function () {
                function SkyscannerRequest() {
                }
                SkyscannerRequest.prototype.withDestinationPlace = function (destinationPlace) {
                    this._destinationPlace = destinationPlace;
                    return this;
                };
                SkyscannerRequest.prototype.withOriginPlace = function (originPlace) {
                    this._originPlace = originPlace;
                    return this;
                };
                SkyscannerRequest.prototype.withCurrentCountry = function (value) {
                    this._currentCountry = value;
                    return this;
                };
                SkyscannerRequest.prototype.getFlightQuotes = function () {
                    if (this._currentCountry == null || this._currentCountry.length < 1) {
                        throw new Error("currentCountry is illegal");
                    }
                    if (this._originPlace == null || this._originPlace.length < 1) {
                        throw new Error("originPlace is illegal");
                    }
                    if (this._destinationPlace == null || this._destinationPlace.length < 1) {
                        throw new Error("destinationPlace is illegal");
                    }
                    var flightQuote = new FlightQuote_1["default"](this._currentCountry, this._originPlace, this._destinationPlace);
                    return fetch(flightQuote.getRequestUrl(_API_KEY), {
                        method: "GET"
                    })
                        .then(function (response) {
                        return response.json();
                    })
                        .then(function (json) {
                        return {
                            quotes: json.Quotes,
                            places: json.Places,
                            carriers: json.Carriers,
                            currencies: json.Currencies
                        };
                    })
                        .then(function (arrays) {
                        return {
                            quotes: arrays.quotes.map(function (quote) {
                                return Quote_1["default"].toQuote(quote);
                            }),
                            places: arrays.places.map(function (place) {
                                return Place_1["default"].toPlace(place);
                            }),
                            carriers: arrays.carriers.map(function (carrier) {
                                return Carrier_1["default"].toCarrier(carrier);
                            }),
                            currencies: arrays.currencies.map(function (currency) {
                                return Currency_1["default"].toCurrency(currency);
                            })
                        };
                    })
                        .then(function (arrays) {
                        return new FlightResponse_1["default"](arrays.quotes, arrays.places, arrays.carriers, arrays.currencies);
                    })["catch"](function (error) {
                        console.log("ERROR:");
                        console.log(error);
                    });
                };
                SkyscannerRequest.getCountries = function () {
                    return fetch(SkyscannerRequest.getCountriesUrl(), {
                        method: "GET"
                    })
                        .then(function (response) {
                        return response.json();
                    })
                        .then(function (json) {
                        return json.Countries.map(function (country) {
                            return new Country_1["default"](country.Code, country.Name);
                        });
                    })
                        .then(function (countries) {
                        return countries;
                    })["catch"](function (error) {
                        console.log("ERROR:");
                        console.log(error);
                    });
                };
                SkyscannerRequest.getCountriesUrl = function () {
                    return _BASE_URL +
                        _REFERENCE_URL +
                        _V10_URL +
                        _COUNTRIES_URL +
                        "/" + _LOCALE +
                        "?" + _API_KEY_URL +
                        _API_KEY;
                };
                return SkyscannerRequest;
            }());
            exports_12("default", SkyscannerRequest);
        }
    };
});
System.register("src/ch/epfl/lauzhack/skyscanner/game/objects/Mission", [], function (exports_13, context_13) {
    "use strict";
    var __moduleName = context_13 && context_13.id;
    var Mission;
    return {
        setters: [],
        execute: function () {
            Mission = /** @class */ (function () {
                function Mission(depart, departCountry, arrival, countryArrival, budget, deadLine, participant) {
                    this.depart = depart;
                    this.departCountry = departCountry;
                    this.arrival = arrival;
                    this.countryArrival = countryArrival;
                    this.budget = budget;
                    this.deadLine = deadLine;
                    this.participant = participant; //Check if it is well copied
                    this.end = false;
                }
                Mission.prototype.assignMission = function (user) {
                    this.participant.push(user);
                    user.setMission(this); ///////check this
                };
                Mission.prototype.isMissionComplete = function () {
                    if (Date.now() < this.deadLine) {
                        for (var i = 0; i < this.participant.length; i++) {
                            if (this.participant[i].getPosition() == this.arrival) {
                                this.winner = this.participant[i];
                                return true;
                            }
                        }
                        return false;
                    }
                    else
                        return true;
                };
                Mission.defaultMission = function () {
                    return new Mission("", "", "", "", 0, Date.now(), Array());
                };
                return Mission;
            }());
            exports_13("default", Mission);
        }
    };
});
System.register("src/ch/epfl/lauzhack/skyscanner/game/objects/User", ["src/ch/epfl/lauzhack/skyscanner/game/objects/Mission", "src/ch/epfl/lauzhack/skyscanner/game/objects/Journey"], function (exports_14, context_14) {
    "use strict";
    var __moduleName = context_14 && context_14.id;
    var Mission_1, Journey_2, User;
    return {
        setters: [
            function (Mission_1_1) {
                Mission_1 = Mission_1_1;
            },
            function (Journey_2_1) {
                Journey_2 = Journey_2_1;
            }
        ],
        execute: function () {
            User = /** @class */ (function () {
                function User(name, money, position, country, mission, inTransport, journey) {
                    this.name = name;
                    this.money = money;
                    this.position = position;
                    this.country = country;
                    this.mission = mission;
                    this.inTransport = inTransport;
                    this.journey = journey;
                }
                User.prototype.getPosition = function () {
                    return this.position;
                };
                User.prototype.getInTransport = function () {
                    this.inTransport = this.updateStatus();
                    return this.inTransport;
                };
                User.prototype.setMission = function (value) {
                    this.mission = value;
                    this.setMoney(value.budget);
                    this.setPosition(value.depart, value.departCountry);
                };
                User.prototype.setPosition = function (position, country) {
                    this.position = position;
                    this.country = country;
                };
                User.prototype.setMoney = function (budget) {
                    this.money = budget;
                };
                User.prototype.debit = function (toDebit) {
                    if (toDebit > 0 && this.money >= toDebit) {
                        return this.setMoney(this.money - toDebit);
                    }
                };
                User.prototype.travelTo = function (destination) {
                    this.inTransport = this.updateStatus();
                    if (!this.getInTransport) {
                        if (this.position == destination.getDepart()) {
                            this.setPosition(destination.getArrival(), destination.getArrivalCountry());
                        }
                        else
                            throw new Error("Illegal argument exception");
                        return this.debit(destination.getCost());
                    }
                    else
                        throw new Error("User travelling");
                };
                User.prototype.updateStatus = function () {
                    return !(this.journey.getDepartTime() >= Date.now() || this.journey.getArrivalTime() <= Date.now());
                };
                User.defaultUser = function () {
                    return new User("", 0, "", "", Mission_1["default"].defaultMission(), false, Journey_2["default"].defaultJourney());
                };
                return User;
            }());
            exports_14("default", User);
        }
    };
});
System.register("static/js/app", ["src/ch/epfl/lauzhack/skyscanner/request/SkyscannerRequest"], function (exports_15, context_15) {
    "use strict";
    var __moduleName = context_15 && context_15.id;
    var SkyscannerRequest_1, App;
    return {
        setters: [
            function (SkyscannerRequest_1_1) {
                SkyscannerRequest_1 = SkyscannerRequest_1_1;
            }
        ],
        execute: function () {
            App = /** @class */ (function () {
                function App() {
                }
                App.run = function (user) {
                    console.log(user);
                    App.updateMap();
                };
                App.updateMap = function () {
                    /*req.withDestPlace
            
            
                    req.withOriginPlace
            
            
                    req.withCurrCOuntr (chainable)
            
            
            
            
                    getFlightQuote.then((fr: FlightResponse) => {
            fr.toJourney()
            }).catch(error => {});
            
            
            */
                };
                App.req = new SkyscannerRequest_1["default"]();
                return App;
            }());
            exports_15("default", App);
        }
    };
});
