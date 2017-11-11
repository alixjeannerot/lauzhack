import FileSystem = require('fs');

export default class API {
    private _key: string;

    constructor() {
        this._key = FileSystem.readFileSync("api.key").toString();
    }

    public getKey(): string {
        return this._key;
    }
}
