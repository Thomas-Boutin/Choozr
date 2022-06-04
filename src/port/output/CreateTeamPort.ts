import type Team from "../../domain/Team";
import type TeamName from "../../domain/TeamName";
import type LoginParameters from "../../domain/LoginParameters";
import type ChoozrId from "../../domain/ChoozrId";

export default interface CreateTeamPort {
    createTeamWith(choozrId: ChoozrId, teamName: TeamName, loginParameters: LoginParameters): Promise<Team>;
}