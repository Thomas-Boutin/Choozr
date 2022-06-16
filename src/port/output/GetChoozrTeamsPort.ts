import type ChoozrId from "../../domain/ChoozrId";
import type LoginParameters from "../../domain/LoginParameters";
import type Team from "../../domain/Team";

export default interface GetChoozrTeamsPort {
    getChoozrTeamsWith(choozrId: ChoozrId, loginParameters: LoginParameters): Promise<Team[]>;
}