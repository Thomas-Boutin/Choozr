import Airtable, { FieldSet, Records } from "airtable";
import Team from "../../domain/Team";
import TeamId from "../../domain/TeamId";
import TeamName from "../../domain/TeamName";
import type LoginParameters from "../../domain/LoginParameters";
import type CreateTeamPort from "../../port/output/CreateTeamPort";
import ChoozrId from "../../domain/ChoozrId";
import type Record from "airtable/lib/record";
import type GetTeamsMembersCountPort from "../../port/output/GetTeamsMembersCountPort";
import TeamMembersCount from "../../domain/TeamMembersCount";
import type GetTeamDetailsPort from "../../port/output/GetTeamDetailsPort";
import TeamDetails from "../../domain/TeamDetails";
import MemberName from "../../domain/MemberName";
import type GetChoozrTeamsPort from "../../port/output/GetChoozrTeamsPort";

export default class RESTTeamOutputAdapter implements CreateTeamPort, GetTeamsMembersCountPort, GetTeamDetailsPort, GetChoozrTeamsPort {
    async getChoozrTeamsWith(choozrId: ChoozrId, loginParameters: LoginParameters): Promise<Team[]> {
        const records = await this.fetchChoozrTeamsRecords(choozrId, loginParameters);

        return records.map(this.recordToTeam);
    }

    async getTeamDetailsWith(teamId: TeamId, loginParameters: LoginParameters): Promise<TeamDetails> {
        const airtable = new Airtable({ apiKey: loginParameters.apiKey }).base(loginParameters.appId);
        const records = await airtable("Team").select({
            filterByFormula: `{id} = '${teamId.value}'`
        }).firstPage();

        return records.map(this.recordToTeamDetails)[0];
    }

    async getTeamsMembersCountFrom(choozrId: ChoozrId, loginParameters: LoginParameters): Promise<TeamMembersCount[]> {
        const records = await this.fetchChoozrTeamsRecords(choozrId, loginParameters);

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

    private async fetchChoozrTeamsRecords(choozrId: ChoozrId, loginParameters: LoginParameters): Promise<Records<FieldSet>> {
        const airtable = new Airtable({ apiKey: loginParameters.apiKey }).base(loginParameters.appId);

        return await airtable("Team").select({
            filterByFormula: `{id (from Choozr)} = '${choozrId.value}'`
        }).firstPage();
    }

    private recordToTeam = (record: Record<FieldSet>): Team => {
        return new Team(
            new TeamId(record.id),
            new TeamName(record.get("name") as string),
            new ChoozrId(record.get("id (from Choozr)") as string)
        );
    };

    private recordToTeamDetails = (record: Record<FieldSet>): TeamDetails => {
        return new TeamDetails(
            new TeamId(record.id),
            new TeamName(record.get("name") as string),
            (record.get("name (from Member)") as string[]).map((name) => new MemberName(name)),
        );
    };

    private recordToTeamMembersCount = (record: Record<FieldSet>): TeamMembersCount => {
        return new TeamMembersCount(
            new TeamId(record.id),
            record.get("membersCount") as number
        );
    };
}