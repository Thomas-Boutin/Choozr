import Airtable from "airtable";
import Choozr from "../../domain/Choozr";
import ChoozrId from "../../domain/ChoozrId";
import ChoozrName from "../../domain/ChoozrName";
import type LoginParameters from "../../domain/LoginParameters";
import type CreateChoozrPort from "../../port/output/CreateChoozrPort";

export default class RESTChoozrOutputAdapter implements CreateChoozrPort {
    async createChoozrWith(choozrName: ChoozrName, loginParameters: LoginParameters): Promise<Choozr> {
        const airtable = new Airtable({ apiKey: loginParameters.apiKey }).base(loginParameters.appId);
        const records = await airtable("Choozr").create([
            {
                "fields": {
                    "name": choozrName.value
                }
            },
        ]);

        return records.map(record => new Choozr(new ChoozrId(record.id), new ChoozrName(record.get("name") as string)))[0];
    }
}