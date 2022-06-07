import Airtable, { FieldSet } from "airtable";
import Team from "../../domain/Team";
import TeamId from "../../domain/TeamId";
import TeamName from "../../domain/TeamName";
import type LoginParameters from "../../domain/LoginParameters";
import type CreateTeamPort from "../../port/output/CreateTeamPort";
import ChoozrId from "../../domain/ChoozrId";
import type Record from "airtable/lib/record";
import type GetTeamsMembersCountPort from "../../port/output/GetTeamsMembersCountPort";
import TeamMembersCount from "../../domain/TeamMembersCount";

export default class RESTTeamOutputAdapter implements CreateTeamPort, GetTeamsMembersCountPort {
    async getTeamsMembersCountFrom(choozrId: ChoozrId, loginParameters: LoginParameters): Promise<TeamMembersCount[]> {
        const airtable = new Airtable({ apiKey: loginParameters.apiKey }).base(loginParameters.appId);
        const records = await airtable("Team").select({
            filterByFormula: `{id (from Choozr)} = '${choozrId.value}'`
        }).firstPage();

        return records.map(this.recordToTeamMembersCount);
    }

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

    private recordToTeamMembersCount = (record: Record<FieldSet>): TeamMembersCount => {
        return new TeamMembersCount(
            new TeamId(record.id),
            record.get("membersCount") as number
        );
    };
}