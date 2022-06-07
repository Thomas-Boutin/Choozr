import Team from "../domain/Team";
import TeamId from "../domain/TeamId";
import type TeamName from "../domain/TeamName";
import type LoginParameters from "../domain/LoginParameters";
import type CreateTeamPort from "../port/output/CreateTeamPort";
import type ChoozrId from "../domain/ChoozrId";
import type GetTeamsMembersCountPort from "../port/output/GetTeamsMembersCountPort";
import TeamMembersCount from "../domain/TeamMembersCount";
import FakeTeam from "./FakeTeam";

export default class FakeTeamOutputAdapter implements CreateTeamPort, GetTeamsMembersCountPort {
    private initialTeamNumberId: number;
    private teams: FakeTeam[] = [];

    constructor(initialTeamNumberId: number) {
        this.initialTeamNumberId = initialTeamNumberId;
    }

    getTeamsMembersCountFrom(choozrId: ChoozrId): Promise<TeamMembersCount[]> {
        const choozrTeamsMembersCount = this.teams
            .filter((team) => team.choozrId.value == choozrId.value)
            .map((team) => new TeamMembersCount(team.id, team.membersCount));
        return Promise.resolve(choozrTeamsMembersCount);
    }

    createTeamWith(choozrId: ChoozrId, teamName: TeamName, _loginParameters: LoginParameters): Promise<Team> {
        const teamId = new TeamId(this.initialTeamNumberId.toString());
        const team = new Team(
            teamId,
            teamName,
            choozrId
        );
        this.teams.push(new FakeTeam(teamId, teamName, choozrId, this.initialTeamNumberId));
        this.initialTeamNumberId++;

        return Promise.resolve(team);
    }
}
