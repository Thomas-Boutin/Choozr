import type ChoozrId from "../domain/ChoozrId";
import type Team from "../domain/Team";
import type TeamDetails from "../domain/TeamDetails";
import type TeamId from "../domain/TeamId";
import type TeamName from "../domain/TeamName";
import type CreateTeamUseCase from "./input/CreateTeamUseCase";
import type GetTeamDetailsUseCase from "./input/GetTeamDetailsUseCase";
import type CreateTeamPort from "./output/CreateTeamPort";
import type GetLoginParametersPort from "./output/GetLoginParametersPort";

export default class TeamService implements CreateTeamUseCase, GetTeamDetailsUseCase {
    private createTeamPort: CreateTeamPort;
    private getLoginParametersPort: GetLoginParametersPort;

    constructor(
        createTeamPort: CreateTeamPort,
        getLoginParametersPort: GetLoginParametersPort,
    ) {
        this.createTeamPort = createTeamPort;
        this.getLoginParametersPort = getLoginParametersPort;
    }

    getTeamDetailsBy(teamId: TeamId): Promise<TeamDetails> {
        throw new Error("Method not implemented.");
    }

    async createTeamWith(choozrId: ChoozrId, teamName: TeamName): Promise<Team> {
        const loginParameters = this.getLoginParametersPort.getLoginParameters();

        return await this.createTeamPort.createTeamWith(choozrId, teamName, loginParameters);
    }
}