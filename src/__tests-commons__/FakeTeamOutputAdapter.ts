import Team from "../domain/Team";
import TeamId from "../domain/TeamId";
import type TeamName from "../domain/TeamName";
import type LoginParameters from "../domain/LoginParameters";
import type CreateTeamPort from "../port/output/CreateTeamPort";
import type ChoozrId from "../domain/ChoozrId";

export default class FakeTeamOutputAdapter implements CreateTeamPort {
    private initialTeamNumberId: number;

    constructor(initialTeamNumberId: number) {
        this.initialTeamNumberId = initialTeamNumberId;
    }

    createTeamWith(choozrId: ChoozrId, teamName: TeamName, _loginParameters: LoginParameters): Promise<Team> {
        const team = new Team(
            new TeamId(this.initialTeamNumberId.toString()),
            teamName,
            choozrId
        );
        this.initialTeamNumberId++;

        return Promise.resolve(team);
    }
}
