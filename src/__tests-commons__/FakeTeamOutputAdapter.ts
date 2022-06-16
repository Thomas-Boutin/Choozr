import Team from "../domain/Team";
import TeamId from "../domain/TeamId";
import type TeamName from "../domain/TeamName";
import type LoginParameters from "../domain/LoginParameters";
import type CreateTeamPort from "../port/output/CreateTeamPort";
import type ChoozrId from "../domain/ChoozrId";
import type GetTeamsMembersCountPort from "../port/output/GetTeamsMembersCountPort";
import TeamMembersCount from "../domain/TeamMembersCount";
import FakeTeam from "./FakeTeam";
import type GetTeamDetailsPort from "../port/output/GetTeamDetailsPort";
import type TeamDetails from "../domain/TeamDetails";
import type GetChoozrTeamsPort from "../port/output/GetChoozrTeamsPort";

export default class FakeTeamOutputAdapter implements CreateTeamPort, GetTeamsMembersCountPort, GetTeamDetailsPort, GetChoozrTeamsPort {
    private initialTeamNumberId: number;
    private teams: FakeTeam[] = [];
    private teamsDetails: TeamDetails[] = [];

    constructor(initialTeamNumberId: number = 0, teamsDetails: TeamDetails[] = [], teams: FakeTeam[] = []) {
        this.initialTeamNumberId = initialTeamNumberId;
        this.teamsDetails = teamsDetails;
        this.teams = teams;
    }

    getChoozrTeamsWith(choozrId: ChoozrId, loginParameters: LoginParameters): Promise<Team[]> {
        const choozrTeams = this.teams
            .filter((team) => team.choozrId.value == choozrId.value)
            .map((team) => new Team(team.id, team.name, team.choozrId));
        return Promise.resolve(choozrTeams);
    }

    getTeamDetailsWith(teamId: TeamId, _loginParameters: LoginParameters): Promise<TeamDetails> {
        const details = this.teamsDetails
            .filter((teamDetails) => teamDetails.teamId.value == teamId.value)
        [0];

        return Promise.resolve(details);
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
