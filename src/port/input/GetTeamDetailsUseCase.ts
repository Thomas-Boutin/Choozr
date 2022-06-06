import type TeamDetails from "../../domain/TeamDetails";
import type TeamId from "../../domain/TeamId";

export default interface GetTeamDetailsUseCase {
    getTeamDetailsBy(teamId: TeamId): Promise<TeamDetails>;
}