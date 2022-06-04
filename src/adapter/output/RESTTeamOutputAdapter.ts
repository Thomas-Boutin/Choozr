import Airtable, { FieldSet } from "airtable";
import Team from "../../domain/Team";
import TeamId from "../../domain/TeamId";
import TeamName from "../../domain/TeamName";
import type LoginParameters from "../../domain/LoginParameters";
import type CreateTeamPort from "../../port/output/CreateTeamPort";
import ChoozrId from "../../domain/ChoozrId";
import type Record from "airtable/lib/record";

export default class RESTTeamOutputAdapter implements CreateTeamPort {
    async createTeamWith(choozrId: ChoozrId, teamName: TeamName, loginParameters: LoginParameters): Promise<Team> {
        const airtable = new Airtable({ apiKey: loginParameters.apiKey }).base(loginParameters.appId);
        const records = await airtable("Team").create([
            {
                "fields": {
                    "name": teamName.value,
                    "Choozr": [
                        choozrId.value
                    ]
                }
            },
        ]);

        return records.map(this.recordToTeam)[0];
    }

    private recordToTeam = (record: Record<FieldSet>): Team => {
        return new Team(
            new TeamId(record.id),
            new TeamName(record.get("name") as string),
            new ChoozrId(record.get("id (from Choozr)") as string)
        );
    };
}