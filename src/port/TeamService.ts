import type ChoozrId from "../domain/ChoozrId";
import type Team from "../domain/Team";
import type TeamDetails from "../domain/TeamDetails";
import type TeamId from "../domain/TeamId";
import type TeamName from "../domain/TeamName";
import type CreateTeamUseCase from "./input/CreateTeamUseCase";
import type GetTeamDetailsUseCase from "./input/GetTeamDetailsUseCase";
import type CreateTeamPort from "./output/CreateTeamPort";
import type GetLoginParametersPort from "./output/GetLoginParametersPort";
import type GetTeamDetailsPort from "./output/GetTeamDetailsPort";

export default class TeamService implements CreateTeamUseCase, GetTeamDetailsUseCase {
    private createTeamPort: CreateTeamPort;
    private getLoginParametersPort: GetLoginParametersPort;
    private getTeamDetailsPort: GetTeamDetailsPort;

    constructor(
        createTeamPort: CreateTeamPort,
        getLoginParametersPort: GetLoginParametersPort,
        getTeamDetailsPort: GetTeamDetailsPort,
    ) {
        this.createTeamPort = createTeamPort;
        this.getLoginParametersPort = getLoginParametersPort;
        this.getTeamDetailsPort = getTeamDetailsPort;
    }

    async getTeamDetailsBy(teamId: TeamId): Promise<TeamDetails> {
        const loginParameters = this.getLoginParametersPort.getLoginParameters();

        return await this.getTeamDetailsPort.getTeamDetailsWith(teamId, loginParameters);
    }

    async createTeamWith(choozrId: ChoozrId, teamName: TeamName): Promise<Team> {
        const loginParameters = this.getLoginParametersPort.getLoginParameters();

        return await this.createTeamPort.createTeamWith(choozrId, teamName, loginParameters);
    }
}