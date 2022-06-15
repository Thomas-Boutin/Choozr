import Airtable, { FieldSet, Record } from "airtable";
import Choozr from "../../domain/Choozr";
import ChoozrId from "../../domain/ChoozrId";
import ChoozrName from "../../domain/ChoozrName";
import type LoginParameters from "../../domain/LoginParameters";
import type CreateChoozrPort from "../../port/output/CreateChoozrPort";
import type GetChoozrsPort from "../../port/output/GetChoozrsPort";

export default class RESTChoozrOutputAdapter implements CreateChoozrPort, GetChoozrsPort {
    async getChoozrsWith(loginParameters: LoginParameters): Promise<Choozr[]> {
        const airtable = new Airtable({ apiKey: loginParameters.apiKey }).base(loginParameters.appId);
        const records = await airtable("Choozr").select().firstPage();

        return records.map(this.recordToChoozr);
    }

    async createChoozrWith(choozrName: ChoozrName, loginParameters: LoginParameters): Promise<Choozr> {
        const airtable = new Airtable({ apiKey: loginParameters.apiKey }).base(loginParameters.appId);
        const records = await airtable("Choozr").create([
            {
                "fields": {
                    "name": choozrName.value
                }
            },
        ]);

        return records.map(this.recordToChoozr)[0];
    }

    private recordToChoozr = (record: Record<FieldSet>): Choozr => {
        return new Choozr(
            new ChoozrId(record.id),
            new ChoozrName(record.get("name") as string),
        );
    };
}