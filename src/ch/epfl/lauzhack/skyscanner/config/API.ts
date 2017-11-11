import FileSystem = require('fs');

export default class API {
    private _filePath: string;
    private _key: string;

    constructor() {
        this._filePath = "api.key";
        this._key = FileSystem.readFileSync(this.getFilePath()).toString();
    }

    public getKey(): string {
        return this._key;
    }

    private getFilePath(): string {
        return this._filePath;
    }
}
