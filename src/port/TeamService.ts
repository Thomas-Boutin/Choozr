import type ChoozrId from "../domain/ChoozrId";
import type Team from "../domain/Team";
import type TeamName from "../domain/TeamName";
import type CreateTeamUseCase from "./input/CreateTeamUseCase";
import type CreateTeamPort from "./output/CreateTeamPort";
import type GetLoginParametersPort from "./output/GetLoginParametersPort";

export default class TeamService implements CreateTeamUseCase {
    private createTeamPort: CreateTeamPort;
    private getLoginParametersPort: GetLoginParametersPort;

    constructor(
        createTeamPort: CreateTeamPort,
        getLoginParametersPort: GetLoginParametersPort,
    ) {
        this.createTeamPort = createTeamPort;
        this.getLoginParametersPort = getLoginParametersPort;
    }

    async createTeamWith(choozrId: ChoozrId, teamName: TeamName): Promise<Team> {
        const loginParameters = this.getLoginParametersPort.getLoginParameters();

        return await this.createTeamPort.createTeamWith(choozrId, teamName, loginParameters);
    }
}