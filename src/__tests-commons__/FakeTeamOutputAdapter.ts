import Team from "../domain/Team";
import TeamId from "../domain/TeamId";
import type TeamName from "../domain/TeamName";
import type LoginParameters from "../domain/LoginParameters";
import type CreateTeamPort from "../port/output/CreateTeamPort";
import type ChoozrId from "../domain/ChoozrId";
import type GetTeamsMembersCountPort from "../port/output/GetTeamsMembersCountPort";
import TeamMembersCount from "../domain/TeamMembersCount";

export default class FakeTeamOutputAdapter implements CreateTeamPort, GetTeamsMembersCountPort {
    private initialTeamNumberId: number;
    private teamsMembersCount: TeamMembersCount[] = [];

    constructor(initialTeamNumberId: number) {
        this.initialTeamNumberId = initialTeamNumberId;
    }

    getTeamsMembersCount(): Promise<TeamMembersCount[]> {
        return Promise.resolve(this.teamsMembersCount);
    }

    createTeamWith(choozrId: ChoozrId, teamName: TeamName, _loginParameters: LoginParameters): Promise<Team> {
        const teamId = new TeamId(this.initialTeamNumberId.toString());
        const team = new Team(
            teamId,
            teamName,
            choozrId
        );
        this.teamsMembersCount.push(new TeamMembersCount(teamId, this.initialTeamNumberId));
        this.initialTeamNumberId++;
        
        return Promise.resolve(team);
    }
}
