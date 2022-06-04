import type ChoozrId from "../../domain/ChoozrId";
import type Team from "../../domain/Team";
import type TeamName from "../../domain/TeamName";

export default interface CreateTeamUseCase {
    createTeamWith(choozrId: ChoozrId, TeamName: TeamName): Promise<Team>;
}