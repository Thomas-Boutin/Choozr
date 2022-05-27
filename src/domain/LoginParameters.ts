export default class LoginParameters {
    appId: string;
    apiKey: string;

    constructor(appId: string, apiKey: string) {
        this.appId = appId;
        this.apiKey = apiKey;
    }
}